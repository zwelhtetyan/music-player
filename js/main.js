const songs = [
    {
        id: 0,
        source: 'musics/track1.mp3',
        trackImg: 'img/week end.jpeg',
        trackName: 'Sacrifice',
        artistName: 'The Weeknd',
    },
    {
        id: 1,
        source: 'musics/track2.mp3',
        trackImg: 'img/powfu.jpeg',
        trackName: 'Death Bed',
        artistName: 'Powfu',
    },
    {
        id: 2,
        source: 'musics/track3.m4a',
        trackImg: 'img/olivia rodrigo.jpeg',
        trackName: 'Happier',
        artistName: 'Olivia Rodrigo',
    },
    {
        id: 3,
        source: 'musics/track4.mp3',
        trackImg: 'img/die for me.jpeg',
        trackName: 'Die For Me',
        artistName: 'Post Malone',
    },
    {
        id: 4,
        source: 'musics/track5.mp3',
        trackImg: 'img/dulipa.jpeg',
        trackName: 'Levitating',
        artistName: 'Dua Lipa',
    },
    {
        id: 5,
        source: 'musics/track6.mp3',
        trackImg: 'img/justin biber.jpeg',
        trackName: 'Intentions',
        artistName: 'Justin Bieber',
    },
    {
        id: 6,
        source: 'musics/track7.mp3',
        trackImg: 'img/song  the weekend.jpeg',
        trackName: 'Die For You',
        artistName: 'The Weeknd',
    },
    {
        id: 7,
        source: 'musics/track8.mp3',
        trackImg: 'img/ocean eyes.jpeg',
        trackName: 'Ocean Eyes',
        artistName: 'Billie Eilish',
    },
    {
        id: 8,
        source: 'musics/track9.mp3',
        trackImg: 'img/post melone.jpeg',
        trackName: 'Circle',
        artistName: 'Post Malone',
    },
    {
        id: 9,
        source: 'musics/track10.mp3',
        trackImg: 'img/mamarosoe.jpeg',
        trackName: 'Ruthless',
        artistName: 'Mar Mar Oso',
    },
    {
        id: 10,
        source: 'musics/track11.mp3',
        trackImg: 'img/oliver.jpeg',
        trackName: 'Traitor',
        artistName: 'Olivia Rodrigo',
    },
    {
        id: 11,
        source: 'musics/track12.m4a',
        trackImg: 'img/the way that you see me.jpeg',
        trackName: 'The Way That YSM',
        artistName: 'Powfu',
    },
    {
        id: 12,
        source: 'musics/track13.m4a',
        trackImg: 'img/bad guy.jpeg',
        trackName: 'Bad Guy',
        artistName: 'Billie Eilish',
    },
    {
        id: 13,
        source: 'musics/track14.mp3',
        trackImg: 'img/billie.jpeg',
        trackName: 'Lost Cause',
        artistName: 'Billie Eilish',
    },
    {
        id: 14,
        source: 'musics/track15.mp3',
        trackImg: 'img/all eyes on you.jpeg',
        trackName: 'All Eyes On YOu',
        artistName: 'Nicki Minaj',
    },
    {
        id: 15,
        source: 'musics/track16.mp3',
        trackImg: 'img/die for me.jpeg',
        trackName: 'Psycho',
        artistName: 'Post Malone',
    },
    {
        id: 16,
        source: 'musics/track17.mp3',
        trackImg: 'img/before you go.jpeg',
        trackName: 'Before You Go',
        artistName: 'The Weeknd',
    },
    {
        id: 17,
        source: 'musics/track18.mp3',
        trackImg: 'img/post melone.jpeg',
        trackName: 'Sunflower',
        artistName: 'Post Malone',
    },
];

const audioTag = document.querySelector('.audioTag');
const songContainer = document.querySelectorAll('.song-container-right-side');
const songImg = document.querySelector('.current-song-img-desktop-footer');
const desktopActionBar = document.querySelector('.desktop-action-bar');
const songTitle = document.querySelector('.song-title-desktop-footer');
const artistName = document.querySelector('.artist-name-desktop-footer');
const actionButton = document.querySelector('.play-and-pause');
const duration = document.querySelector('.duration');
const favorite = document.querySelector('.favorite');
const forward = document.querySelector('.forward');
const backward = document.querySelector('.backward');
const progressContainer = document.querySelector('.progress-container');
const progressBar = document.querySelector('.inner-progress');
const rotateImg = document.querySelector('.current-song-img');
const minimize = document.querySelector('.expend-button-container');
const playlistContainer = document.querySelector('.total-playlist');

//creating img to show active wave for currently playing song
const playingSongIcon = document.createElement('img');
playingSongIcon.src = './img/playingsong.png';
playingSongIcon.style.width = '25px';
playingSongIcon.style.marginRight = '10px';

//making function to play the current song
const playTheCurrentSong = (songContainer) => {
    if (window.innerWidth > 1100) {
        desktopActionBar.style.bottom = '0';
    } else {
        if (desktopActionBar.classList.contains('desktop-action-bar-8vh')) {
            desktopActionBar.style.bottom = '55px';
        } else {
            desktopActionBar.style.bottom = '0';
        }
    }
    actionButton.innerHTML = `<i class="feather-pause action-button"></i>`;
    actionButton.style.backgroundColor = 'red';
    isPlaying = true;

    // adding playing song icon
    songContainer.childNodes[3].prepend(playingSongIcon);
    playingSongIcon.classList.add('playing-song-icon');

    songImg.src = songs[songContainer.id].trackImg;
    songTitle.textContent = songs[songContainer.id].trackName;
    artistName.textContent = songs[songContainer.id].artistName;
    audioTag.src = songs[songContainer.id].source;
    audioTag.play();
    audioTag.id = songContainer.id;
    rotateImg.classList.add('playing');

    // saving liked songs
    if (songContainer.classList.contains('liked')) {
        favorite.classList.add('fas', 'fa-heart', 'text-danger');
        favorite.classList.remove('feather-heart');
    } else {
        favorite.classList.remove('fas', 'fa-heart', 'text-danger');
        favorite.classList.add('feather-heart');
    }
};

// adding song to action bar and adding playing icon to current song
for (let i = 0; i < songContainer.length; i++) {
    const allSongContainer = songContainer[i];
    allSongContainer.style.position = 'relative';
    allSongContainer.id = i;

    //call playTheCurrentSong function
    allSongContainer.addEventListener('click', () =>
        playTheCurrentSong(allSongContainer)
    );
}

// for paly and pause button
let isPlaying = true;
actionButton.addEventListener('click', (e) => {
    e.stopPropagation();
    if (isPlaying) {
        rotateImg.classList.remove('playing');
        actionButton.innerHTML = `<i class="feather-play action-button"></i>`;
        actionButton.style.backgroundColor = 'green';
        audioTag.pause();
        playingSongIcon.classList.remove('playing-song-icon');
        isPlaying = false;
    } else {
        rotateImg.classList.add('playing');
        actionButton.innerHTML = `<i class="feather-pause action-button"></i>`;
        actionButton.style.backgroundColor = 'red';
        audioTag.play();
        playingSongIcon.classList.add('playing-song-icon');
        isPlaying = true;
    }
});

//show duration and current time
let resultDuration = '';
audioTag.addEventListener('loadeddata', () => {
    const totalDuration = Math.floor(audioTag.duration);
    resultDuration = calculateTime(totalDuration);
});

audioTag.addEventListener('timeupdate', () => {
    const currentTime = Math.floor(audioTag.currentTime);
    const resultCurrentTime = calculateTime(currentTime);
    duration.innerHTML = `${resultCurrentTime} / ${resultDuration}`;
});

//function for calculate time
const calculateTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const minuteTag = minutes < 10 ? '0' + minutes.toString() : minutes;
    const secondTag = seconds < 10 ? '0' + seconds.toString() : seconds;

    return minuteTag + ':' + secondTag;
};

let favoriteId = '';
let currentSongId = '';
// to create favorite icon when click particular song
songContainer.forEach((songs) => {
    songs.addEventListener('click', () => {
        favoriteId = Number(songs.id);
        currentSongId = Number(songs.id);
    });
});

// for like or unlike;
favorite.addEventListener('click', (e) => {
    e.stopPropagation();
    if (document.getElementById(favoriteId).classList.contains('liked')) {
        document.getElementById(favoriteId).classList.remove('liked');
        favorite.classList.remove('fas', 'fa-heart', 'text-danger');
        favorite.classList.add('feather-heart');
    } else {
        document.getElementById(favoriteId).classList.add('liked');
        favorite.classList.remove('feather-heart');
        favorite.classList.add('fas', 'fa-heart', 'text-danger');
    }
});

//for forwardButton
forward.addEventListener('click', () => {
    if (isFilter) {
        const createdFilterSong = document.querySelectorAll(
            '.song-container-created'
        );
        for (let i = 0; i < createdFilterSong.length; i++) {
            if (numForFilterSong === createdFilterSong.length - 1) {
                return;
            }
        }
        numForFilterSong += 1;
        console.log('these are filtered songs');
        const playingFilteredSong = document.querySelector(
            `[num = "${numForFilterSong}"]`
        );

        favoriteId = playingFilteredSong.id;
        const idToPlayFilterSong = document.getElementById(
            playingFilteredSong.id
        );
        playTheCurrentSong(idToPlayFilterSong);
    } else {
        console.log('these are normal songs');
        if (favoriteId === 17) {
            favoriteId = 0;
        } else {
            favoriteId += 1;
        }
        if (currentSongId === 17) {
            currentSongId = -1;
        }
        const idToGoForward = currentSongId + 1;
        const nextSong = document.getElementById(idToGoForward);
        playTheCurrentSong(nextSong);
        currentSongId += 1;
    }
});

//for backwardButton
backward.addEventListener('click', () => {
    if (isFilter) {
        const createdFilterSong = document.querySelectorAll(
            '.song-container-created'
        );
        for (let i = 0; i < createdFilterSong.length; i++) {
            if (numForFilterSong === 0) {
                return;
            }
        }
        numForFilterSong -= 1;
        console.log('these are filtered songs');
        const playingFilteredSong = document.querySelector(
            `[num = "${numForFilterSong}"]`
        );

        favoriteId = playingFilteredSong.id;
        const idToPlayFilterSong = document.getElementById(
            playingFilteredSong.id
        );
        playTheCurrentSong(idToPlayFilterSong);
    } else {
        console.log('these are normal songs');
        if (favoriteId === 0) {
            return;
        }
        favoriteId -= 1;
        if (currentSongId === 0) {
            return;
        }
        const idToGoBackward = currentSongId - 1;
        const previousSong = document.getElementById(idToGoBackward);
        playTheCurrentSong(previousSong);
        currentSongId -= 1;
    }
});

//for volume
const volume = document.querySelector('.range');

function handleRangeUpdate() {
    audioTag.volume = this.value;
}

volume.addEventListener('change', handleRangeUpdate);
volume.addEventListener('mousemove', handleRangeUpdate);

//for progress
function handleProgress() {
    const percent = (audioTag.currentTime / audioTag.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}
audioTag.addEventListener('timeupdate', handleProgress);

function scrub(e) {
    const scrubTime =
        (e.offsetX / progressContainer.offsetWidth) * audioTag.duration;
    audioTag.currentTime = scrubTime;
}
let mouseDown = false;
progressContainer.addEventListener('click', scrub);
progressContainer.addEventListener('mouseDown', () => (mouseDown = true));
progressContainer.addEventListener('mouseup', () => (mousedown = false));
progressContainer.addEventListener('mousemove', (e) => mouseDown && scrub(e));

// for minimize
minimize.addEventListener('click', () => {
    if (desktopActionBar.classList.contains('desktop-action-bar-100vh')) {
        minimize.innerHTML = `<i class="feather-chevron-up expend-button"></i>`;
        if (window.innerWidth < 1100) {
            desktopActionBar.style.bottom = '54px';
        }
        desktopActionBar.classList.add('desktop-action-bar-8vh');
        setTimeout(() => {
            desktopActionBar.classList.add('8vh-mobile');
        }, 300);
        desktopActionBar.classList.remove('desktop-action-bar-100vh');
    } else {
        minimize.innerHTML = `<i class="feather-chevron-down expend-button"></i>`;
        desktopActionBar.classList.add('desktop-action-bar-100vh');
        desktopActionBar.classList.remove('desktop-action-bar-8vh');
    }
});

//for mobile minimize
desktopActionBar.addEventListener('click', () => {
    if (
        desktopActionBar.classList.contains('8vh-mobile') &&
        window.innerWidth < 1100
    ) {
        desktopActionBar.classList.add('desktop-action-bar-100vh');
        desktopActionBar.classList.remove('desktop-action-bar-8vh');
        desktopActionBar.classList.remove('8vh-mobile');
        desktopActionBar.style.bottom = '0';
        minimize.innerHTML = `<i class="feather-chevron-down expend-button"></i>`;
    }
});

//auto play next song
audioTag.addEventListener('ended', () => {
    if (audioTag.id === '17') {
        audioTag.id = -1;
    }
    const idToAutoPlayNextSong = parseFloat(audioTag.id) + 1;
    const autoPlayNextSong = document.getElementById(idToAutoPlayNextSong);
    playTheCurrentSong(autoPlayNextSong);
});

let isFilter = false;
let numForFilterSong = '';
//filter music
const searchBox = document.querySelector('.search-music');
const searchBoxMobile = document.querySelector(
    '.search-box-mobile .search-music'
);

//for desktop search box
searchBox.addEventListener('keyup', (e) => {
    filtering(e);
});

// for mobile search box
searchBoxMobile.addEventListener('keyup', (e) => {
    filtering(e);
});

const filtering = (e) => {
    if (searchBox.length === 0) {
        isFilter = false;
        return;
    }
    playlistContainer.innerHTML = '';
    const userSearch = e.target.value.toLowerCase();

    const filterResult = songs.filter((song) => {
        return song.trackName.toLowerCase().includes(userSearch);
    });

    // creating filter songs
    for (let i = 0; i < filterResult.length; i++) {
        isFilter = true;
        const allFilterResult = filterResult[i];
        playlistContainer.innerHTML += `
        <div class="song-container d-flex align-items-center song-container-created" id="${allFilterResult.id}">
        <div class="me-auto d-flex align-items-center" style="cursor: pointer">
            <div class="song-img">
                <img src="${allFilterResult.trackImg}" alt="" width="50px" style="border-radius: 7px" />
            </div>
            <div class="song-name-and-artist ms-3">
                <p class="mb-0 fw-bold" style="font-size: 17px">
                    ${allFilterResult.trackName}
                </p>
                <p class="mb-0 artist-name" style="font-size: 15px">
                    ${allFilterResult.artistName}
                </p>
            </div>
        </div>
        <div class="menu">
            <i class="feather-more-vertical" style="font-size: 25px"></i>
        </div>
        </div>`;

        const createdSongContainer = document.querySelectorAll(
            '.song-container-created'
        );

        // setting to able forward and backward correctly;
        for (let i = 0; i < createdSongContainer.length; i++) {
            const allCreatedSongContainer = createdSongContainer[i];

            allCreatedSongContainer.setAttribute('num', `${i}`);

            allCreatedSongContainer.addEventListener('click', () => {
                numForFilterSong = Number(
                    allCreatedSongContainer.getAttribute('num')
                ); // to take attribute and than get this id;

                // update favoriteId
                favoriteId = allCreatedSongContainer.id;

                const idToPlayTheCurrentSong = document.getElementById(
                    allCreatedSongContainer.id
                );
                playTheCurrentSong(idToPlayTheCurrentSong);
            });
        }
    }
};
