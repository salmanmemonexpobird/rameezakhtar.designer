import HeaderFour from '@/layouts/headers/HeaderFour';
import Breadcrumb from './Breadcrumb';
import SideBlogPostBoxArea from './SideBlogPostBoxArea';
import FooterFour from '@/layouts/footers/FooterFour';

const BlogSidebar = () => {
  return (
    <>
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb />
            <SideBlogPostBoxArea/>
          </main>
          <FooterFour />
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;