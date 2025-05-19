function navbar() {
    return `
    <div id="logo">
        <a href="../index.html"><img src="https://tv.apple.com/assets/brands/Apple_TV_plus_logo_white-2721485772b7d06c4e33379ce990870e.svg" alt=""></a>
    </div>
    <div id="user_nav">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input id="search_input" oninput="input_movie()" type="search" placeholder="Search" value="">
        <button onclick="mic()">
            <i class="fa-solid fa-microphone"></i>
        </button>

        <button class="landing_navbar_button d-flex">
        <div class="logo_sigin m-1">
          <i class="fa-solid fa-user"></i>
        </div>
        <div class="logo_text">
          <a id="logo" href="signin.html">Sign In</a>
        </div>
      </button>

    </div>`;
}

export default navbar;