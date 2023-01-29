// ІМПОРТУЄМО БІБЛІОТЕКИ БЕЗ ЯКИХ НЕ МОЖЕМО ПИСАТИ КОД
import React from "react";
import styled from "styled-components";

// ІМПОРТУЄМО ПОТРІБНІ КОМПОНЕНТИ
import Page from "./component/Page";
import Header from "./component/Header";
import Balance from "./component/Balance";
import Menu from "./component/Menu";
import Payment from "./component/Payment";

// КОНФІГУРАЦІЯ ========================================

const START_BALANCE = 0;
const LIMIT_BALANCE = 100000;
const GET_MONEY = 100;

const SALARY_AMOUNT = 10000;
const COURSE_PRICE = 850;

export default function App() {
  // ФУНКЦІОНАЛ БАЛАНСУ ========================

  // Ось тут тримаємо актуальне значення балансу

  const [balance, setBalance] = React.useState(START_BALANCE);

  // Функція для прямого поповнення балансу
  const getMoney = () => {
    setBalance(balance + GET_MONEY);

    setPayment([
      ...payment,
      {
        name: "Payment",
        amount: GET_MONEY,
        type: "+"
      }
    ]);
  };
  // Функція яка виконується кожен раз коли наш баланс змінився
  React.useEffect(() => {
    // Перевірка на ліміт балансу
    if (balance > LIMIT_BALANCE) {
      alert(`Ваш ліміт балансу: ${LIMIT_BALANCE}`);
      setBalance(START_BALANCE);
    }

    // Перевірка на мінусовий баланс
    if (balance < 0) {
      alert(`Ви використали усі свої гроші. Поповніть картку`);
      // setBalance(0);
    }
    // Сюди записуються змінні при оновленні яких буде виконуватися функція
  }, [balance]);
  //Transactions
  const [payment, setPayment] = React.useState([]);

  const getSalary = () => {
    setBalance(balance + SALARY_AMOUNT);

    setPayment([
      ...payment,
      {
        name: "Salary",
        amount: SALARY_AMOUNT,
        type: "+"
      }
    ]);
  };

  const buyCourse = () => {
    setBalance(balance - COURSE_PRICE);

    setPayment([
      ...payment,
      {
        name: "Loan",
        amount: COURSE_PRICE,
        type: "-"
      }
    ]);
  };
  // ВЕРСТКА ІНТЕРФЕЙСУ ==========================================

  const LOGIN = "Taria";
  const PASSWORD = "123";

  //login to use the app
  const [isLogged, setLogged] = React.useState(false);

  const doLogin = () => {
    const login = prompt("Login");
    const password = prompt("Password");

    if (login === LOGIN && password === PASSWORD) {
      alert("You succesful login");
      setLogged(true);
    } else {
      if (login !== LOGIN) {
        alert("You login invalid");
      }
      if (password !== PASSWORD) {
        alert("You password invalid");
      }
    }
  };

  return (
    <Page>
      {/* компонент шапки з нашою назвою
          також при кліку мишкою на шапку
          в нас визивається функція HelloWorld
      */}

      <Header name="TARIAS BANK" onClick={doLogin} />

      {/* Компонент баланса в який передається
          Актуальне значення балансу  */}
      {isLogged && <Balance balance={balance} />}

      <Menu
        // ось сюди ми передаємо конфігурацію кнопок
        config={[
          {
            name: "Payment",
            onClick: getMoney,
            img: "/icon/get.svg"
          },
          {
            name: "Take a salary",
            onClick: getSalary,
            img: "/icon/send.svg"
          },
          {
            name: "Loan",
            onClick: buyCourse,
            img: "/icon/another.svg"
          }
        ]}
      />
      {/* компонент списка наших транзакцій
          цей функціонал ми будемо робити на 3 уроці
      */}
      {isLogged && <Payment payment={payment} />}
    </Page>
  );
}
