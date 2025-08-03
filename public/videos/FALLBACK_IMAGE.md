# Fallback Image Information

This directory should contain a high-quality fallback image (e.g., `fallback-image.jpg`) that will be shown:

1. While the video is loading
2. If the video fails to load
3. On browsers that don't support video

## Recommendations for Fallback Image:

1. **Resolution**: 1920x1080 (16:9 aspect ratio)
2. **Format**: JPEG for photographs, PNG for graphics with transparency
3. **File size**: Aim for under 200KB for fast loading
4. **Content**: Should be a still frame from the video or a similar image that represents the same content
5. **Compression**: Use a tool like TinyPNG or ImageOptim to compress without visible quality loss

## Example Image Generation

For quick implementation, you could use a still frame from your video:
```
ffmpeg -i background-video.mp4 -ss 00:00:03 -frames:v 1 fallback-image.jpg
```

This extracts a frame at the 3-second mark of your video.

## Webp Alternative

Consider also providing a WebP version for modern browsers, which offers better compression:
```
ffmpeg -i fallback-image.jpg -q:v 70 fallback-image.webp
```
