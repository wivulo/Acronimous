interface iFade{
  from: number;
  to: number;
  timing: number;
}

export const fade = ({from, to, timing}: iFade) => {
  let opacity = from;
  let fade = setInterval(() => {
    opacity = opacity + 0.1;
    
    (opacity > to) && clearInterval(fade);

    return opacity;
  }, timing)
}
