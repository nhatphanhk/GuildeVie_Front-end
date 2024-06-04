npx create-react-app : Tạo dự án React
npm install axios react-router-dom: 
- axios dùng để gọi API
- react-router-dom điều hướng router
npm install --save-dev eslint prettier
- định dụng mã nguồn, format lại toàn bộ cấu trúc code

I.	Cấu trúc Files:
front-end/
  ├── public/
  ├── src/
  │   ├── assets/
  │   ├── components/
  │   ├── containers/
  │   ├── api/
  │   ├── hooks/
  │   ├── views/
  │   ├── styles/
  │   ├── utils/
  │   ├── App.js
  │   ├── index.js
  │   └── setupTests.js
  └── package.json

- public/
Chứa các file tĩnh như HTML, hình ảnh, favicon.
- src/
+ assets/
Chứa các tài sản tĩnh như hình ảnh, fonts, v.v.
+ components/
Chứa các component React.
=> Đặt tên theo mô hình: ComponentName.js và thư mục con nếu cần thiết (e.g., Button/, Header/).
+ containers/
Chứa các container component, thường kết nối với Redux hoặc Context API.
+ api/
Chứa các file tương tác với API.
=> Đặt tên theo mô hình: serviceName.js (e.g., userService.js).
+ hooks/
Chứa các custom hooks của React.
+ views/
Chứa các trang chính của ứng dụng.
=> Đặt tên theo mô hình: PageName.js (e.g., HomePage.js, LoginPage.js).
+ styles/
Chứa các file CSS hoặc SCSS.
=> Đặt tên theo mô hình: tênComponent.module.css hoặc tênComponent.module.scss.
+ utils/
Chứa các hàm tiện ích, tương tự như backend.
+ App.js và index.js
App.js: component gốc của ứng dụng.
index.js: file khởi tạo và render ứng dụng React.
+ setupTests.js
Chứa cấu hình cho việc test.

======> Chạy front-end: npm start

---------------------------------------------------

II.	Quy tắc đặt tên
File và thư mục: Tên file và thư mục nên sử dụng camelCase hoặc PascalCase tuỳ theo loại file. Tránh sử dụng dấu cách hoặc ký tự đặc biệt. Riêng tên project React theo quy tắc “project-name”
Component: Sử dụng PascalCase (e.g., MyComponent.js).
Hook: Sử dụng camelCase với tiền tố use (e.g., useAuth.js).
Branch cho common component: component_***_ten

---------------------------------------------------

III.	Quy tắc khác

-	Testing: Sử dụng các thư viện như Jest và React Testing Library cho việc test.
o	Nếu cảm thấy ổn thì cài est và React Testing Library:
	npm install --save-dev jest (Jest)
	npm install --save-dev @testing-library/react @testing-library/jest-dom (React Testing Library)
•	Việc này khá khó và phải viết một file riêng để test (ko khuyến khích)

-	Version control: Tổ chức các commit theo một quy tắc nhất định (e.g., Conventional Commits).
o	<type>[optional scope]: <description> 
[optional body] [
optional footer(s)]
Closes #number-of-commit #Name-of-commit

	Ví dụ: git commit -m "feat(auth): 
thêm chức năng đăng nhập 
- Thêm màn hình đăng nhập 
- Kết nối API để xác thực người dùng 
Closes #45 #HieuLee"


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
