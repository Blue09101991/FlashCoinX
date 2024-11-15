const GoogleMap = () => {
  return (
    <div className=" my-rounded-20 relative text-center w-full lg:h-[657px] gap-mt-24">
      <div className=" my-rounded-20 overflow-hidden !bg-none w-full lg:h-[657px] h-full">
        <iframe
          className="w-full lg:h-[657px] md:h-[520px] h-[380px]"
          src="https://maps.google.com/maps?width=534&amp;height=657&amp;hl=en&amp;q=Man%20City,%20England,%20UK&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
