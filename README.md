# Music Player

A simple and interactive Music Player built using HTML, CSS, and JavaScript. The application allows users to play songs, navigate through a playlist, control volume, track playback progress, and save preferences using Local Storage.

## Features

### Music Controls
- Play songs
- Pause songs
- Next song
- Previous song

### Playlist
- Display available songs
- Select and play any song
- Highlight currently playing song

### Progress Tracking
- Real-time progress bar
- Seek audio by clicking the progress bar
- Current playback time
- Total song duration

### Volume Control
- Adjust volume level
- Save volume settings using Local Storage

### Auto Play
- Automatically play the next song when the current song ends

### Data Persistence
- Remember last played song
- Remember volume settings
- Restore preferences after page refresh

### User Interface
- Clean and responsive design
- Easy-to-use controls
- Playlist highlighting

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Local Storage API
- HTML Audio API

## Project Structure

```text
Music-Player/
│
├── index.html
├── style.css
├── script.js
│
└── songs/
    ├── song1.mp3
    ├── song2.mp3
    └── song3.mp3
```

## Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/Music-Player.git
```

2. Navigate to the project directory

```bash
cd Music-Player
```

3. Add your audio files to the `songs` folder.

4. Update the song list inside `script.js` if needed.

5. Open `index.html` in your browser.

## How It Works

1. Select a song from the playlist.
2. Use the Play/Pause button to control playback.
3. Navigate through songs using Next and Previous buttons.
4. Adjust volume using the volume slider.
5. Click the progress bar to seek to a specific position in the song.
6. The player automatically remembers your last song and volume settings.

## Learning Outcomes

Through this project, I learned:

- DOM Manipulation
- Event Handling
- JavaScript Audio API
- Progress Bar Implementation
- Local Storage
- Dynamic Playlist Rendering
- Array and Object Handling
- Responsive Web Design
- Git & GitHub Workflow

## Author

Vinayak S.
