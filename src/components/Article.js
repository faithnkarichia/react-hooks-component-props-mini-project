function Article({ title, date = "January 1, 1970", preview, minutes }) {
    let timeToRead = "";
  
    if (minutes <= 30) {
      const cups = Math.ceil(minutes / 5); 
      timeToRead = "☕".repeat(cups);
    } else {
      const boxes = Math.ceil(minutes / 10); 
      timeToRead = "🍱".repeat(boxes);
    }
  
    return (
      <article>
        <h3>{title}</h3>
        <small>{date} • {timeToRead} {minutes} min read</small>
        <p>{preview}</p>
      </article>
    );
  }
  export default Article;