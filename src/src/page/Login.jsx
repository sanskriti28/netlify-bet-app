// import React from 'react';
// import RightSidebar from "../modal/RightSidebar";
// import img1 from "../assets/logo.svg";
// import ForgotPassword from '../modal/ForgotPassword';
// const Login = () => {
//   const style = {
//     width: '170px'
//   }
//   return (
//     <div style={{ padding: '17px 10px', }} className='flex justify-between'>
//       <div className="drop-shadow-lg">
//         <img style={style} src={img1} alt="Logo" />
//       </div>
//       <div className="w-full max-w-xl flex justify-end">
//         <form className="bg-white px-4">
//           <div className=" flex items-center justify-center">
//             <div>
//               <input className="shadow appearance-none border rounded w-full py-2 px-3 text-base text-black-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Username" />
//               <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
//               <label for="checked-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">remember me</label>
//             </div>
//             <input className="shadow appearance-none border rounded w-full py-2 px-3 text-base text-black-700 leading-tight focus:outline-none focus:shadow-outline ml-2" type="password" placeholder="Password" />
//             <button className="flex-shrink-0 bg-red-500 hover:bg-red-700 text-white text-base py-1 px-2 rounded focus:outline-none focus:shadow-outline ml-2" type="button">
//               Login
//             </button>
//             <button className="flex-shrink-0 bg-green-500 hover:bg-green-700 text-white text-base py-1 px-2 rounded focus:outline-none focus:shadow-outline ml-2" type="button">
//               Register
//             </button>
//           </div>
//         </form>
//         <div className="drop-shadow-lg">
//           <RightSidebar />
//         </div>
//       </div>
//       <ForgotPassword />
//     </div>
//   );
// }

// export default Login;
import React from 'react';
import RightSidebar from "../modal/RightSidebar";
import img1 from "../assets/logo.svg";
import ForgotPassword from '../modal/ForgotPassword';
import RegisterUser from '../modal/RegisterUser';

const Login = () => {
  const style = {
    width: '170px'
  }

  return (
    <div style={{ padding: '17px 10px', }} className='flex justify-between'>
      <div className="drop-shadow-lg">
        <img style={style} src={img1} alt="Logo" />
      </div>
      <div className="w-full max-w-xl flex justify-end">
        <form className="bg-white px-4">
          <div className=" flex items-center justify-center">
            <div>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-base text-black-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Username" />
              <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="checked-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <div>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-base text-black-700 leading-tight focus:outline-none focus:shadow-outline ml-2" type="password" placeholder="Password" />
              <ForgotPassword />
            </div>
            <button className="flex-shrink-0 bg-red-500 hover:bg-red-700 text-white text-base py-1 px-2 rounded focus:outline-none focus:shadow-outline ml-2" type="button">
              Login
            </button>

            
              <RegisterUser />
         

          </div>
        </form>
        <div className="drop-shadow-lg">
          <RightSidebar />
        </div>
      </div>

    </div>
  );
}

export default Login;


