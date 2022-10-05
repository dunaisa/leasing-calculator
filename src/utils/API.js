const BASE_URL = 'https://hookb.in/eK160jgYJ6UlaRPldJ1P';

const checkResponse = (res) => {
  if (res.ok) {
    console.log(res)
    return res.json();
  }
  // если ошибка, отклоняем промис
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const postForm = async ({ car_coast, initail_payment, initail_payment_percent, lease_term, total_sum, monthly_payment_from }) => {
  const res = await fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      car_coast: car_coast,
      initail_payment: initail_payment,
      initail_payment_percent: initail_payment_percent,
      lease_term: lease_term,
      total_sum: total_sum,
      monthly_payment_from: monthly_payment_from,
    })
  });
  return checkResponse(res);
};