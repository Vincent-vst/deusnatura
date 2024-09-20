const score = [
  "https://musescore.com/user/31019973/scores/5608204",
  "https://musescore.com/user/36702327/scores/6894664",
  "https://musescore.com/user/10919536/scores/2377386",
  "https://musescore.com/james_brigham/scores/698281",
  "https://musescore.com/user/34480/scores/60578",
  "https://musescore.com/user/29801874/scores/6010407",
  "https://musescore.com/user/96561/scores/5090486",
  "https://musescore.com/user/204498/scores/244081",
  "https://musescore.com/user/73724/scores/92226",
  "https://musescore.com/user/4132551/scores/1569156",
  "https://musescore.com/user/2188756/scores/12644545",
  "https://musescore.com/user/33062253/scores/11880103",
  "https://musescore.com/user/7149011/scores/6353198",
  "https://musescore.com/fredpaul/scores/4312696",
  "https://musescore.com/user/2548271/scores/18185062",
  "https://musescore.com/user/27798920/scores/4928327",
  "https://musescore.com/user/29345460/scores/5630225",
  "https://musescore.com/user/176936/scores/169401",
  "https://musescore.com/user/13502736/scores/5495876",
  "https://musescore.com/nicolas/scores/4526",
  "https://musescore.com/user/23022316/scores/6363642",
  "https://musescore.com/nicolas/scores/4363",
  "https://musescore.com/user/9292486/scores/2086036",
  "https://musescore.com/user/17829001/scores/7068381",
  "https://musescore.com/user/17829001/scores/7074072",
  "https://musescore.com/user/38146912/scores/11586919",
  "https://musescore.com/user/36602757/scores/9080693",
  "https://musescore.com/user/18579/scores/32263",
  "https://musescore.com/user/8734536/scores/1972921",
  "https://musescore.com/user/18579/scores/32257",
  "https://musescore.com/user/32254186/scores/6349844",
  "https://musescore.com/user/2548271/scores/18299599",
  "https://musescore.com/user/14146686/scores/6894271",
  "https://musescore.com/user/14868381/scores/6385682",
  "https://musescore.com/infinite_arrangements/scores/5349614",
  "https://musescore.com/asiatomax/scores/5881138",
  "https://musescore.com/user/13502736/scores/5549919",
  "https://musescore.com/user/36218420/scores/6862979",
  "https://musescore.com/user/17829001/scores/9091649",
  "https://musescore.com/user/9898486/scores/5679971",
  "https://musescore.com/user/21640316/scores/6240679",
];

export function randomScoreURL() {
  return score[Math.floor(Math.random() * score.length)] + "/embed";
}

//TODO : there has to be a more reacty way to do this
export function createTag() {
  if (document.getElementById("iframeScore")) {
    const elem = document.getElementById("iframeScore");
    elem?.parentNode?.removeChild(elem);
  }
  const nextFrame = document.createElement("iframe");
  nextFrame.setAttribute("src", randomScoreURL());
  nextFrame.setAttribute("id", "iframeScore");
  nextFrame.setAttribute("height", "800px");
  nextFrame.setAttribute("width", "100%");
  document.getElementById("frame")?.appendChild(nextFrame);
}
