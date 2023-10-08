const Footer = () => {
  return (
    <footer className="h-16 md:h-14 md:flex items-center justify-center bg-orange-200 dark:bg-orange-700">
      <p className="text-md mt-1 md:mt-0 sticky bottom-0 text-gray-600 dark:text-orange-50 bottom-0 text-center">
        © {new Date().getFullYear()}, Made with ❤️ by
      </p>
      <p className="font-alex ml-2 text-center text-4xl text-orange-700 dark:text-orange-200 font-bold tracking-wider">
        Prateek Saini
      </p>
    </footer>
  );
};

export default Footer;
