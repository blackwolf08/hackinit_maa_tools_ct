import React from 'react'
import { Popover, Button, Card, Col, Row } from 'antd';
import hosp1 from './hosp1.jpeg'
import hosp2 from './hosp2.jpg'
import hosp3 from './hosp3.jpg'


export default  class App extends React.Component {
  state = {
    popVisible: true
  };

  hide = () => {
    this.setState({
        popVisible: true
    })
  };


  handleClickChange = option => {
    this.props.handleClickChange(option)
  };

  render() {
    const content =  (
        <div className="map-content">
          <div style={{ background: '#ECECEC', padding: '30px' }}>
    <Row gutter={16}>
      <Col span={8}>
        <Card onClick={()=>{this.handleClickChange(1)}}  bordered={false}>
            <img src={hosp1} className="hos-img" />
          Apollo Noida
        </Card>
      </Col>
      <Col span={8}>
        <Card onClick={()=>{this.handleClickChange(2)}}  bordered={false}>
        <img src={hosp2} className="hos-img" />
          AIIMS Delhi
        </Card>
      </Col>
      <Col span={8}>
        <Card onClick={()=>{this.handleClickChange(3)}}  bordered={false}>
        <img src={hosp3} className="hos-img" />
          Fortis Delhi
        </Card>
      </Col>
    </Row>
  </div>
        </div>
      );
    return (

    <Popover className='hospital-select' content={content} title="Hospitals Near You" trigger="click">
      <Button>Search Hospitals</Button>
    </Popover>
    );
  }
}
