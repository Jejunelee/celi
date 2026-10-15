export function FacebookVideo({
  href,
  title,
  width,
  height,
}: {
  href: string;
  title: string;
  width: number;
  height: number;
}) {
  const src = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(href)}&show_text=false&width=${width}&height=${height}&t=0`;

  return (
    <div className="w-full bg-black" style={{ containerType: "inline-size" }}>
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: `${width} / ${height}` }}>
        <iframe
          src={src}
          title={title}
          className="absolute top-0 left-0 max-w-none"
          style={{
            border: 0,
            width,
            height,
            transform: `scale(calc(100cqw / ${width}px))`,
            transformOrigin: "0 0",
          }}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}
