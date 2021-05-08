export default function Instruction() {
  return (
    <>
      <h1 className="text-4xl text-center mb-8 mt-8">Instructions</h1>
      <div className=" grid grid-cols-3 gap-16">
        <div className="text-center bg-gray-300 p-8">
          <h3 className="text-2xl mb-4">Enter two Github users</h3>
          <div className="text-center">
            <i class="lni lni-user block text-8xl"></i>
          </div>
        </div>
        <div className="text-center bg-gray-300 p-8">
          <h3 className="text-2xl mb-4">Battle</h3>
          <div>
            <i class="lni lni-plane  text-8xl"></i>
          </div>
        </div>
        <div className="text-center bg-gray-300 p-8">
          <h3 className="text-2xl mb-4">See the winner</h3>
          <div>
            <i class="lni lni-crown  text-8xl"></i>
          </div>
        </div>
      </div>
    </>
  );
}
