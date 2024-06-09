import '../css/App.css';
import Card from '../components/card'
import Challenge_Info from '../components/challenge-info';
import imgCover from '../images/illustration-article.svg'
import imgSelf from '../images/image-avatar.webp'

function App() {
  return (
    <div className="App">
      <Card 
      imgCover={imgCover}
      publishdate='Published 21 Dec 2023'
      title='HTML & CSS foundations'
      description='These languages are the backbone of every website, defining structure, content, and presentation.'
      imgSelf={imgSelf}
      name='Greg Hooper'
       />
       <Challenge_Info link='https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS'/>
    </div>
  );
}

export default App;
