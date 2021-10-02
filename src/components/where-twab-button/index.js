import './index.css';
import { tweets, gifs } from '../../data/tweets';
export default function WhereTwabButton(props) {
  const text = tweets[Math.floor(Math.random() * tweets.length)];
  const gif = gifs[Math.floor(Math.random() * gifs.length)];

  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURI(
    text + ' ' + gif
  )}&url=https://wheretwab.com&hashtags=TWAB`;
  return (
    <h1 className="where-twab-button">
      <a target="_blank" href={tweetUrl} rel="noreferrer">
        Where TWAB?
      </a>
    </h1>
  );
}
