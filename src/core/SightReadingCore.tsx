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
  "https://musescore.com/user/23784/scores/205736",
  "https://musescore.com/user/27439014/scores/5320866",
  "https://musescore.com/user/15111/scores/39881",
  "https://musescore.com/user/7307766/scores/5690922",
  "https://musescore.com/user/19658656/scores/6288506",
  "https://musescore.com/user/293771/scores/339546",
  "https://musescore.com/user/1198636/scores/5122739",
  "https://musescore.com/user/203715/scores/208726",
  "https://musescore.com/user/13502736/scores/5588950",
  "https://musescore.com/user/24713/scores/42284",
  "https://musescore.com/user/30010606/scores/5331148",
  "https://musescore.com/user/166653/scores/171357",
  "https://musescore.com/user/11083396/scores/6061339",
  "https://musescore.com/user/191296/scores/181704",
  "https://musescore.com/user/20979201/scores/5560263",
  "https://musescore.com/user/35766237/scores/11779768",
  "https://musescore.com/user/32442859/scores/5612944",
  "https://musescore.com/user/31647742/scores/5660764",
  "https://musescore.com/user/8100131/scores/5470571",
  "https://musescore.com/user/37450011/scores/11656621",
  "https://musescore.com/user/38018912/scores/9976861",
  "https://musescore.com/user/13657576/scores/4870623",
  "https://musescore.com/user/17349061/scores/5217900",
  "https://musescore.com/user/14493821/scores/4370201",
  "https://musescore.com/jacobviolinist/scores/321951",
  "https://musescore.com/user/38018912/scores/9976861",
  "https://musescore.com/user/18137871/scores/5658077",
  "https://musescore.com/user/18137871/scores/5630435",
  "https://musescore.com/user/13502736/scores/6527025",
  "https://musescore.com/user/27664967/scores/5572609",
  "https://musescore.com/user/32145620/scores/5725348",
  "https://musescore.com/user/10087466/scores/2340126",
  "https://musescore.com/user/37089714/scores/6546825",
  "https://musescore.com/user/1977/scores/6509419",
  "https://musescore.com/user/36518481/scores/8945472",
  "https://musescore.com/user/36175072/scores/7262592",
  "https://musescore.com/user/69096/scores/6657693",
  "https://musescore.com/user/40695866/scores/8307872",
  "https://musescore.com/user/29225643/scores/9572317",
  "https://musescore.com/user/31890266/scores/9271036"
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
  document.getElementById("frame")?.appendChild(nextFrame);
}
