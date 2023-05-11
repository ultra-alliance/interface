import React from 'react';
import InfoCard from '@/components/molecules/InfoCard';

import { tFactoryManifested } from '@ultra-alliance/ultra-sdk';

type PicturesProps = {
  factoryData?: tFactoryManifested;
};

export default function Pictures({ factoryData }: PicturesProps) {
  const { data, manifest } = factoryData || {};
  const [isVideo, setIsVideo] = React.useState(false);
  const handleIsVideo = () => setIsVideo(!isVideo);

  React.useEffect(() => {
    if (!manifest?.media?.images?.product) {
      return;
    }

    const videoExtensions = ['.mp4', '.webm'];

    fetch(manifest.media.images.product)
      .then(response => response.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        console.log(blob.type);
        console.log(url);
        const isVideoUrl = videoExtensions.some(ext => url.endsWith(ext));

        setIsVideo(isVideoUrl);

        URL.revokeObjectURL(url);
      })
      .catch(error => console.error(error));
  }, [manifest?.media?.images?.product]);

  if (!data || !manifest) return null;

  return (
    <InfoCard title={manifest.subName}>
      {manifest.media.images.hero && (
        <>
          <img alt="here-img" width={'100%'} src={manifest.media.images.hero} />
        </>
      )}

      {manifest?.media?.images?.product && (
        <>
          {isVideo ? (
            <video
              src={manifest.media.images.product}
              width={'100%'}
              controls
            />
          ) : (
            <img
              alt="product-img"
              src={manifest.media.images.product}
              width={'100%'}
              onError={handleIsVideo}
            />
          )}
        </>
      )}

      {manifest?.media?.gallery?.map((img: string, index: number) => (
        <img
          key={index}
          alt="square-img"
          src={img}
          width={'100%'}
          height={'auto'}
        />
      ))}
    </InfoCard>
  );
}
