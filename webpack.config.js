var path = require('path');
//Thư mục sẽ chứa tập tin được biên dịch
var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
//Thư mục chứa dự án - các component React
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
//Thêm
  module : {
    rules : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  }
//Kết thúc Thêm
};

module.exports = config;

// Vòng đời của component

// Khởi tạo Component
// Lần lượt các hành động sau để khởi tạo component:

// Khởi tạo Class (đã thừa kế từ class Component của React)
// Khởi tạo giá trị mặc định cho Props (defaultProps)
// Khởi tạo giá trị mặc định cho State (trong hàm constuctor)
// Gọi hàm componentWillMount()
// Gọi hàm render()
// Gọi hàm componentDidMount()


// Khi State thay đổi
// Cập nhật giá trị cho state
// Gọi hàm shouldComponentUpdate()
// Gọi hàm componentWillUpdate() – với điều kiện hàm trên return true
// Gọi hàm render()
// Gọi hàm componentDidUpdate()


// Khi Props thay đổi
// Cập nhật giá trị cho props
// Gọi hàm componentWillReceiveProps()
// Gọi hàm shouldComponentUpdate()
// Gọi hàm componentWillUpdate() – với điều kiện hàm trên return true
// Gọi hàm render()
// Gọi hàm componetDidUpdate()


// Khi Unmount component
// Gọi hàm componentWillUnmount()