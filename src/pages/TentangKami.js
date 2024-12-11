import { Col, Container, Row } from 'react-bootstrap';
import BerandaImages from '../components/BerandaImages';

function TentangKami() {
    return (
        <Container className="informasi-beranda">
            <Row>
                <Col sm={8}>
                    <div className='title-info'>
                        Visi
                    </div >
                    <div className='content-info'>
                        “Mewujudkan perguruan Tinggi Islam yang terpandang,
                        berwibawa, bermutu tinggi dan mampu bersaing dalam forum
                        nasional maupun Internasional”
                    </div>
                    <div className='title-info'>
                        Misi
                    </div >
                    <div className='content-info'>
                        “1. Mengembangkan ilmu pengetahuan, teknologi, dan seni, melalui pendidikan, pengajaran dan pembelajaran yang unggul dan bermutu tinggi sesuai Islam,
                        2. Mengembangkan ilmu pengetahuan, teknologi dan seni, melalui pengkajian, penelitian dan publikasi yang unggul dan bermutu tinggi sesuai Islam,
                        3. Mengembangkan ilmu pengetahuan, teknologi, dan seni, yang dapat menjawab masalah dan tantangan masyarakat dunia yang unggul dan bermutu tinggi sesuai Islam,
                        4. Mengembangkan sumberdaya manusia dan tata kelola yang dapat menjawab persoalan yang timbul di masyarakat serta memberi arah perubahan dalam rangka membangun masyarakat dunia, khususnya masyarakat Indonesia yang adil, makmur, merata dan beradab sesuai Islam.”
                    </div>
                </Col>
                <Col sm={4}>
                    <Row>
                        <BerandaImages />
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default TentangKami;