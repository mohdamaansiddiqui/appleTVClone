function navbar() {
    return `
    <div id="logo">
        <a href="../index.html"><img src="https://tv.apple.com/assets/brands/Apple_TV_plus_logo_white-2721485772b7d06c4e33379ce990870e.svg" alt=""></a>
    </div>
    <div id="user_nav">
        <i class="fa-solid fa-magnifying-glass" id="glass"></i>

        <input id="search_input"  type="search" placeholder="Search">
        
        <button id="mic">
            <i  class="fa-solid fa-microphone"></i>
        </button>

        <img id="user" 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7vc_Yl8ivCDmoe-ZhVAgSISHffH9OSL5fXBpb49Ax0WiJ6eCA-J7LB9RU-gXu3smgIQ8&usqp=CAU"
        alt="">


    </div>`;
}

export default navbar;