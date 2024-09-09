const Footer = () => {
  return (
    <footer>
      <div className=" bg-neutral text-neutral-content p-10">
        <div className="flex justify-center flex-col lg:flex-row">
          {/*--------------------*/}
          <div className="bg-red-700 w-full">
            <div className="">
              <h3 className="text-2xl md:text-3xl lg:text-3xl py-2 font-bold">
                CONTACT US
              </h3>
              <h5 className="md:text-xl lg:text-xl">
                123 ABS Street, Uni 21, Bangladesh
              </h5>
              <p className="md:text-xl lg:text-xl">+88 123456789</p>
              <p className="md:text-xl lg:text-xl">Mon - Fri: 08:00 - 22:00</p>
              <p className="md:text-xl lg:text-xl">Sat - Sun: 10:00 - 23:00</p>
            </div>
          </div>
          {/*--------------------*/}
          <div className="bg-red-700 w-full">
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-3xl py-2 font-bold">
                Follow US
              </h3>
              <p className="md:text-xl lg:text-xl">Sat - Sun: 10:00 - 23:00</p>
              <div className="flex gap-4 py-3">
                <i className="fa-brands fa-facebook text-2xl text-white hover:-translate-y-2 duration-200"></i>
                <i className="fa-brands fa-instagram text-2xl text-white hover:-translate-y-2 duration-200"></i>
                <i className="fa-brands fa-twitter text-2xl text-white hover:-translate-y-2 duration-200"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer text-xl footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
