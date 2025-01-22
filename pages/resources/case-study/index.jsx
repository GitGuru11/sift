import CaseStudySectionRenderer from './CaseStudySectionRenderer';
import Layout from '../../../components/Layout';
import { usePathname } from 'next/navigation';
export default function CaseStudy(props) {
  if (props?.data?.error) return <p className='pt-[100px] text-center'>Error: something went wrong please wait or try again</p>;
  const sections = props?.data?.pageBuilder?.sections || [];
  return (
    <Layout>
      <div className='case-study-detail'>
        {sections.map((section, index) => (
          <CaseStudySectionRenderer key={index} type={section.__typename} data={section} />
        ))}
      </div>
    </Layout>
  );
}
