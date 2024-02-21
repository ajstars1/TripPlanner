import { CardsChat } from "@/components/utils/Chat";

const Page = () => {
    return (
      <div>
        <div className="p-4 justify-center items-center flex flex-col">
        <h1 className="text-3xl text-slate-800">AI Adviser</h1>
        <p className="text-sm text-slate-500">Get Advice for Travel</p>
        </div>
        <CardsChat />
      </div>
    );
}
 
export default Page;