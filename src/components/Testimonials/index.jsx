import {Tweet} from 'react-tweet';

import {Container} from '@/components/Container';

const tweets = [
  '1278606838070534149',
  '1264805970649194502',
  '1264935778557341696',
  '1301541350601633796',
  '1299048282069467136',
  '1298704840718196738',
  '1351174243086708746',
  '1618231342411698177',
  '1263688081900625928',
  '1288448878291935232',
  '1316766116841103364',
  '1265940953338130432',
  '1273854712677314561',
  '1681099100366708736',
  '1299887174838517763',
  '1361705139283898374',
  '1306880524766638083',
  '1265203165361778688',
  '1264291435173629958',
  '1394871939605348352',
  '1588130688452157440',
  '1660872526434652162',
  '1645844479390384132',
  '1400212191857442817',
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Loved by developers worldwide.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Here’s what some of our users have to say about Responsively.
          </p>
        </div>
      </Container>
      <ul
        role="list"
        className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 px-8 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
      >
        {[0, 1, 2, 4, 5].map((column, columnIndex) => (
          <li key={columnIndex}>
            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
              {tweets.map((tweetId, idx) => {
                if (idx % 5 === columnIndex) {
                  return (
                    <li key={tweetId}>
                      <Tweet id={tweetId} />
                    </li>
                  );
                }
              })}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
