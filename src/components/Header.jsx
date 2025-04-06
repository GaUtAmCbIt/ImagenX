import React from 'react';

function Header() {
  return (
   <>
   <nav class="block w-full  px-4 py-2 mx-auto bg-white shadow-md rounded-md lg:px-8 lg:py-3 ">
  <div class="container flex flex-wrap items-center justify-between mx-auto text-slate-800 ">
    <a href="#" class="mr-4 block cursor-pointer py-1.5 text-base  font-semibold text-blue-600">
      ImagenX<span style={{color:"black"}}>.ai</span>
    </a>
  </div>
</nav>
   </>
  );
}

export default Header;