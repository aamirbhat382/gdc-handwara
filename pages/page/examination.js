
import { Accordion } from "flowbite-react";

const examination = () => {
  const faqsList = [
    {
      q: "What are some random questions to ask?",
      a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",
    },
    {
      q: "Do you include common questions?",
      a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.",
    },
    {
      q: "Can I use this for 21 questions?",
      a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
    },
  ];

  return (
    <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl text-gray-800 font-semibold">Examination</h1>
      </div>
      <div className="mt-14 mb-4 max-w-2xl mx-auto">
        <Accordion>
          <Accordion.Panel>
            <Accordion.Title>Examination Announcments</Accordion.Title>
            <Accordion.Content>
                <ul>
                    <li className="my-2">
              <a
                href="#"
                className="text-indigo-500 underline dark:text-gray-400"
              >
                Check out this guide to learn how to
              </a>
              </li>
              <li className="my-2">
              <a
                href="#"
                className="text-indigo-500 underline dark:text-gray-400"
              >
                Check out this guide to learn how to
              </a>
              </li>
              <li className="my-2">
              <a
                href="#"
                className="text-indigo-500 underline dark:text-gray-400"
              >
                Check out this guide to learn how to
              </a>
              </li>
              <li className="my-2">
              <a
                href="#"
                className="text-indigo-500 underline dark:text-gray-400"
              >
                Check out this guide to learn how to
              </a>
              </li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </section>
  );
};

export default examination;
