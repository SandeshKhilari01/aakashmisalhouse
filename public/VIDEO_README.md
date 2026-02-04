# Video Background Setup

## 📹 Add Your Video File

To see the video background in action, you need to add your video file to the `/public` folder.

### Required Files:

1. **Video File:** `/public/hero-video.mp4`
   - Format: MP4 (H.264 codec)
   - Resolution: 1920x1080 (Full HD recommended)
   - Duration: 10-15 seconds (for smooth looping)
   - File Size: Under 2-3MB (compressed)
   
2. **Poster Image (Optional):** `/public/hero-poster.jpg`
   - This shows while the video is loading
   - Same resolution as video (1920x1080)
   - JPG format, optimized

### Quick Test:

If you don't have a video yet, you can:
1. Use a free stock video from [Pexels](https://www.pexels.com/videos/) or [Pixabay](https://pixabay.com/videos/)
2. Download and rename it to `hero-video.mp4`
3. Place it in the `/public` folder
4. Refresh your browser at http://localhost:3000

### Current Status:

✅ VideoBackground component created
✅ Hero component updated with video support
⏳ Waiting for video file at `/public/hero-video.mp4`

The video will:
- Autoplay (muted)
- Loop continuously
- Have a dark overlay for text readability
- Be responsive on all devices
