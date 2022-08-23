import ChannelBar from './components/Channelbar';
import ContentContainer from './components/ContentContainer';
import Siderbar from './components/Sidebar';

function App() {
  return (
    <div className="flex">
      <Siderbar />
      <ChannelBar />
      <ContentContainer />
    </div>
  );
}

export default App;
