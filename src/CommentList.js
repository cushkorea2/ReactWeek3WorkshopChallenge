import{Col,Row}from 'reactStrap';
import{CampsiteCard} './from CampSiteCard';
import{selectAllCampites} from'./campsitesSlice';

const CampsiteList=(setCampsiteId)=> {
    const campesites=selectAllCampites();

    return (
        <Row className='ms-auto'>
            {campsite.map((campsite)=> {
                return (col md='5' className='m-4' key ={campsite.id}>
                onclick={()}=>setCampsiteId()
                <CampsiteCard  campsite={campsite.id}>
                    </Col>
                );
            })}
        </Row>
    );
};
export default CampsiteList;