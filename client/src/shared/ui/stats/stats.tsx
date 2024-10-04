export const Stats = () => {
  return (
    <div className="flex flex-col gap-[42px] items-center font-bebas w-[200px]">
      <h3 className="uppercase text-[32px]">Roadmap Stats</h3>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex flex-col items-center after:content-[''] after:w-full after:h-[1px] after:bg-line">
          <p className="text-[28px] text-orange mb-3">12,345</p>
          <p className="uppercase text-lg mb-2">Lorem Ipsum Dolor</p>
        </div>
        <div className="flex flex-col items-center after:content-[''] after:w-full after:h-[1px] after:bg-line">
          <p className="text-[28px] text-orange mb-3">12,345</p>
          <p className="uppercase text-lg mb-2">Lorem Ipsum Dolor</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-[28px] text-orange mb-3">12,345</p>
          <p className="uppercase text-lg mb-2">Lorem Ipsum Dolor</p>
        </div>
      </div>
    </div>
  );
};
