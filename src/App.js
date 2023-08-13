import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import HomeDemo from "./components/practice/HomeDemo";
import UseRefExample1 from "./components/UseRefExample1";
import UseRefDemo2 from "./components/practice/UseRefDemo2";
import UseRefDemo1 from "./components/practice/UseRefDemo1";
import UseRefDemo3 from "./components/practice/UseRefDemo3";
import UseMemoDemo from "./components/practice/UseMemoDemo";
import UseCallbackDemo from "./components/practice/UseCallbackDemo";
import CustomHookDemo from "./components/practice/CustomHookDemo";
import LocalStorageHookDemo from "./components/practice/LocalStorageHookDemo";
import UseRefExample2 from "./components/UseRefExample2";
import UseRefExample3 from "./components/UseRefExample3";
import UseMemoExample from "./components/UseMemoExample";
import UseCallbackExample from "./components/UseCallbackExample";
import CustomHookExample1 from "./components/CustomHookExample1";
import CustomHookExample2 from "./components/CustomHookExample2";

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <Routes>
          <Route path="/demo" element={<HomeDemo />} />
          <Route path="/useref-demo-1" element={<UseRefDemo1 />} />
          <Route path="/useref-demo-2" element={<UseRefDemo2 />} />
          <Route path="/useref-demo-3" element={<UseRefDemo3 />} />
          <Route path="/usememo-demo" element={<UseMemoDemo />} />
          <Route path="/usecallback-demo" element={<UseCallbackDemo />} />
          <Route path="/customHook-demo" element={<CustomHookDemo />} />
          <Route path="/localStorageHook-demo" element={<LocalStorageHookDemo />} />
          <Route path="/" element={<Home />} />
          <Route path="/useref-example-1" element={<UseRefExample1 />} />
          <Route path="/useref-example-2" element={<UseRefExample2 />} />
          <Route path="/useref-example-3" element={<UseRefExample3 />} />
          <Route path="/usememo-example" element={<UseMemoExample />} />
          <Route path="/usecallback-example" element={<UseCallbackExample />} />
          <Route
            path="/custom-hook-example-1"
            element={<CustomHookExample1 />}
          />
          <Route
            path="/custom-hook-example-2"
            element={<CustomHookExample2 />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
