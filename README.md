## Concept của Redux Saga
### Trong project React Native dùng Redux sẽ có những thành phần sau:
1. View (Component)
2. Store (Redux)
3. Reducer
4. Action
5. Saga

## Concept của SAGA (hoặc redux middleware) là:

View => gọi dispatch action (để ra lệnh cho Saga làm gì đó) => Saga nhận được action từ View => Saga xử lý gì đó (get api chẳng hạn) => Saga xử lý xong => gọi dispatch action (để ra lệnh cho Reducer cập nhật lại state) => Reducer sẽ hứng action từ Saga để cập nhật state trong store của Redux => state thay đổi => View sẽ được cập nhật.

