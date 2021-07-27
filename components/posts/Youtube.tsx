import { string } from "prop-types";
import { default as ReactYouTube } from "react-youtube";

export type YouTubeOptionsType = { height: string; width: string };
export type YouTubeParamsType = { videoId: string; opts?: YouTubeOptionsType };

export const YouTube = ({ videoId, opts }: YouTubeParamsType) => {
  const _opts = {
    width: opts?.width || "100%",
    height: opts?.height || "100%",
  };
  return (
    <div className="aspect-w-16 aspect-h-9">
      <ReactYouTube
        videoId={videoId}
        opts={_opts} // defaults -> {}

        // Implement these as I need them.
        // className={string} // defaults -> null
        // containerClassName={string} // defaults -> ''
        // onReady={func} // defaults -> noop
        // onPlay={func} // defaults -> noop
        // onPause={func} // defaults -> noop
        // onEnd={func} // defaults -> noop
        // onError={func} // defaults -> noop
        // onStateChange={func} // defaults -> noop
        // onPlaybackRateChange={func} // defaults -> noop
        // onPlaybackQualityChange={func} // defaults -> noop
      />
    </div>
  );
};
