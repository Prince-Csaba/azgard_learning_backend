import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

function Quote() {
  const [quote, setQuote] = useState("");

  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8000/api/quote')
      .then(res => res.json())
      .then(
        (result) => {
          setQuote(result);
          setIsLoaded(true);
        },

        (error) => {
          setError(true);
          setIsLoaded(true);
        }
      )
  }, [])

  return (
    <div>
      <Card className="mb-4">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p className="pt-0">
              {' '}
              {quote}
              {' '}
            </p>
            <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">Bromunity</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Quote;