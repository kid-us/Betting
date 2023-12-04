import React from "react";
import FAQItem from "./FAQItem";

const FAQ = ({ onClick }) => {
  const faqData = [
    {
      id: "q1",
      question: "How to Deposit?",
      answer:
        "After signing in or registering, head to your account's Wallet in the navigation bar. Choose the deposit option, enter your desired deposit amount, and proceed. Follow the steps providedby our Chapa payment processor to select your bank and complete the deposit. Your deposited amount will be instantly credited to your Maverick Habesha e-wallet",
    },
    {
      id: "q2",
      question: "How Does the Affiliate Program and Payment Work?",
      answer:
        "Upon signing up, an affiliate link is automatically generated and can be found on the Power Partner page. Invite users through this link. When your referred users place bets on casino games or sports, you receive a 20% commission on their wagers. These earnings are credited directly to your Maverick Habesha wallet.",
    },
    {
      id: "q3",
      question: "How Does the Single Bet and Multi Bet System Work?",
      answer:
        "With a single bet system, each match has its separate wager. The multi bet system allows betting on multiple matches with a single wager. Remember, in the multi bet system, losing one match means losing the entire bet.",
    },
    {
      id: "q4",
      question: "How to Participate in Tournaments and Win Jackpot Prizes?",
      answer:
        "Visit the Tournaments page and engage in the available challenges. Achieve specific multipliers or targets in games with a minimum wager of 10 ETB. Capture a screenshot as proof and send it to our designated Telegram account. Once verified, you'll receive your well-deserved reward.",
    },
    {
      id: "q5",
      question: "How to Play Casino Games?",
      answer:
        "Simply select your preferred game, set your wager, and aim for big wins and high multipliers. It's easy and straightforward!",
    },
    {
      id: "q6",
      question: "How to Withdraw?",
      answer:
        "Similar to depositing, go to the Wallet section and select Withdraw. Fill in your desired withdrawal amount and bank details. Follow the Chapa process, and your money will be promptly sent to your designated bank account.",
    },
    {
      id: "q7",
      question: "How to Bet on Sports?",
      answer:
        "Navigate to the Sports page and select the sport you wish to bet on. Choose the desired odds for your wager. Then, decide between the single or multi bet system. Place your bet accordingly, and your bet slip or ticket will be stored in My Bets for your reference. It's as simple as that!",
    },
    {
      id: "q8",
      question: " What Should I Do If I Find a Bug or an Error?",
      answer:
        "If you come across a bug while using Maverick Habesha, we value your contribution in reporting it to us. Kindly get in touch with our support team and provide specific details about the bug encountered, such as a clear description of the issue, any error messages received, and the affected game or feature. Depending on the bug's severity and impact, we may offer compensation for your assistance. Please reach out to our dedicated team via Telegram",
    },
  ];
  return (
    <>
      <div id="faq-container">
        <div className="faqs px-4 animate__animated animate__fadeInRight">
          <div className="faq-header">
            <div className="float-start">
              <p className="display-6 fw-semibold pt-4 text-warning">FAQ</p>
            </div>
            <div className="float-end">
              <p
                onClick={onClick}
                className="text-danger cursor ms-5 bi-arrow-right fs-4 pt-4"
              ></p>
            </div>
          </div>

          {faqData.map((faqs) => (
            <FAQItem
              key={faqs.id}
              question={faqs.question}
              answer={faqs.answer}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQ;
