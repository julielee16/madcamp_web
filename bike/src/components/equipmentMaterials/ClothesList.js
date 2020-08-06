import React from 'react';
import ClothesCard from './clothesCard';
import './uiEquip.css';

const clothesinfo = [
    {
      title: '산틱 빕숏 패드 팬츠 M9C05103',
      link: 'https://search.shopping.naver.com/gate.nhn?id=18865645554',
      image: 'https://shopping-phinf.pstatic.net/main_1886564/18865645554.20190423182109.jpg',
      lprice: '37610',
      hprice: '109000',
      mallName: '네이버',
      productId: '18865645554',
      productType: '1',
      brand: '산틱',
      maker: '산틱',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거의류/잡화',
      category4: '하의'
    },
    {
      title: '산틱 져지 WM7C02107',
      link: 'https://search.shopping.naver.com/gate.nhn?id=11458997838',
      image: 'https://shopping-phinf.pstatic.net/main_1145899/11458997838.20170503161553.jpg',
      lprice: '27520',
      hprice: '37000',
      mallName: '네이버',
      productId: '11458997838',
      productType: '1',
      brand: '산틱',
      maker: '산틱',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거의류/잡화',
      category4: '상의'
    },
    {
      title: 'ALBO 자전거 패드 속 바지 싸이클 빕숏 안장통 반바지 엉덩이 팬츠 남성 여성',
      link: 'https://search.shopping.naver.com/gate.nhn?id=81860520907',
      image: 'https://shopping-phinf.pstatic.net/main_8186052/81860520907.11.jpg',
      lprice: '8900',
      hprice: '0',
      mallName: '알리보다싸',
      productId: '81860520907',
      productType: '2',
      brand: '',
      maker: '',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거의류/잡화',
      category4: '하의'
    },
    {
      title: '자전거 젤 패드 속 바지',
      link: 'https://search.shopping.naver.com/gate.nhn?id=9650986045',
      image: 'https://shopping-phinf.pstatic.net/main_9650986/9650986045.3.jpg',
      lprice: '16500',
      hprice: '0',
      mallName: '데스티',
      productId: '9650986045',
      productType: '2',
      brand: '',
      maker: '',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거의류/잡화',
      category4: '하의'
    },
    {
      title: '산틱 5부 패드팬츠 W7C05090',
      link: 'https://search.shopping.naver.com/gate.nhn?id=11713131221',
      image: 'https://shopping-phinf.pstatic.net/main_1171313/11713131221.20170615190955.jpg',
      lprice: '27720',
      hprice: '34000',
      mallName: '네이버',
      productId: '11713131221',
      productType: '1',
      brand: '산틱',
      maker: '산틱',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거의류/잡화',
      category4: '하의'
    },
    {
      title: '사일런스 자전거 패드 바지 엉덩이 속바지 이너웨어',
      link: 'https://search.shopping.naver.com/gate.nhn?id=11746998210',
      image: 'https://shopping-phinf.pstatic.net/main_1174699/11746998210.1.jpg',
      lprice: '18000',
      hprice: '0',
      mallName: '사일런스코리아',
      productId: '11746998210',
      productType: '2',
      brand: '사일런스',
      maker: '사일런스',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거의류/잡화',
      category4: '하의'
    },
    {
      title: '3 COLOR 오스탈레띠 자전거옷 긴팔 져지',
      link: 'https://search.shopping.naver.com/gate.nhn?id=82380681272',
      image: 'https://shopping-phinf.pstatic.net/main_8238068/82380681272.8.jpg',
      lprice: '16900',
      hprice: '0',
      mallName: '오스탈레띠',
      productId: '82380681272',
      productType: '2',
      brand: '',
      maker: '',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거의류/잡화',
      category4: '상의'
    },
    {
      title: '10 COLOR 오스탈레띠 자전거복 반팔 져지 - A',
      link: 'https://search.shopping.naver.com/gate.nhn?id=81839492855',
      image: 'https://shopping-phinf.pstatic.net/main_8183949/81839492855.13.jpg',
      lprice: '15800',
      hprice: '0',
      mallName: '오스탈레띠',
      productId: '81839492855',
      productType: '2',
      brand: '',
      maker: '',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거의류/잡화',
      category4: '상의'
    },
    {
      title: '메리다 블랙레드 라이딩복 MERIDA 라이딩 자전거복 여름반팔 PS-000007839',
      link: 'https://search.shopping.naver.com/gate.nhn?id=23247966624',
      image: 'https://shopping-phinf.pstatic.net/main_2324796/23247966624.20200623213857.jpg',
      lprice: '23000',
      hprice: '32000',
      mallName: '네이버',
      productId: '23247966624',
      productType: '1',
      brand: '',
      maker: '',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거의류/잡화',
      category4: '상하세트'
    },
    {
      title: '라파 라이딩복 그라데이션 프로팀 져지 자전거복',
      link: 'https://search.shopping.naver.com/gate.nhn?id=22201260610',
      image: 'https://shopping-phinf.pstatic.net/main_2220126/22201260610.20200315145721.jpg',
      lprice: '34000',
      hprice: '34000',
      mallName: '네이버',
      productId: '22201260610',
      productType: '1',
      brand: '라파',
      maker: '',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거의류/잡화',
      category4: '상하세트'
    },
    {
      title: '라파 코어 빕숏 Rapha CORE BIB SHORTS 런던직배송 - 2색상',
      link: 'https://search.shopping.naver.com/gate.nhn?id=22654940246',
      image: 'https://shopping-phinf.pstatic.net/main_2265494/22654940246.20200426160707.jpg',
      lprice: '151000',
      hprice: '330000',
      mallName: '네이버',
      productId: '22654940246',
      productType: '1',
      brand: '라파',
      maker: '라파',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거의류/잡화',
      category4: '상의'
    },
    {
      title: '오스탈레띠 자전거 빕숏 5부 블랙',
      link: 'https://search.shopping.naver.com/gate.nhn?id=82516002802',
      image: 'https://shopping-phinf.pstatic.net/main_8251600/82516002802.jpg',
      lprice: '56000',
      hprice: '0',
      mallName: '오스탈레띠',
      productId: '82516002802',
      productType: '2',
      brand: '',
      maker: '',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거의류/잡화',
      category4: '하의'
    },
    {
      title: '라르고 자전거 젤패드 속바지',
      link: 'https://search.shopping.naver.com/gate.nhn?id=23320828331',
      image: 'https://shopping-phinf.pstatic.net/main_2332082/23320828331.20200701171041.jpg',
      lprice: '4900',
      hprice: '4900',
      mallName: '네이버',
      productId: '23320828331',
      productType: '1',
      brand: '라르고',
      maker: '',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거의류/잡화',
      category4: '하의'
    },
    {
      title: '산틱 긴팔 져지 WM7C01079G',
      link: 'https://search.shopping.naver.com/gate.nhn?id=13730597167',
      image: 'https://shopping-phinf.pstatic.net/main_1373059/13730597167.20180310152524.jpg',
      lprice: '30870',
      hprice: '36000',
      mallName: '네이버',
      productId: '13730597167',
      productType: '1',
      brand: '산틱',
      maker: '산틱',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거의류/잡화',
      category4: '상의'
    },
    {
      title: '엠씨엔 민소매 이너웨어 MTM-KMESH',
      link: 'https://search.shopping.naver.com/gate.nhn?id=7467033414',
      image: 'https://shopping-phinf.pstatic.net/main_7467033/7467033414.20140205121314.jpg',
      lprice: '13300',
      hprice: '30530',
      mallName: '네이버',
      productId: '7467033414',
      productType: '1',
      brand: '엠씨엔',
      maker: '엠씨엔',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거의류/잡화',
      category4: '상의'
    },
    {
      title: '메리다 라이딩복 MERIDA 라이딩 자전거복 봄긴팔 여름반팔 PS-000007839',
      link: 'https://search.shopping.naver.com/gate.nhn?id=82175300704',
      image: 'https://shopping-phinf.pstatic.net/main_8217530/82175300704.jpg',
      lprice: '26000',
      hprice: '0',
      mallName: 'PRIMESTORE',
      productId: '82175300704',
      productType: '2',
      brand: '',
      maker: '',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거의류/잡화',
      category4: '상하세트'
    },
    {
      title: '산틱 Santic 타이즈 패드 긴 바지 WM7C04091',
      link: 'https://search.shopping.naver.com/gate.nhn?id=11459112920',
      image: 'https://shopping-phinf.pstatic.net/main_1145911/11459112920.20171018164435.jpg',
      lprice: '33480',
      hprice: '40000',
      mallName: '네이버',
      productId: '11459112920',
      productType: '1',
      brand: '산틱',
      maker: '산틱',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거의류/잡화',
      category4: '하의'
    },
    {
      title: '라파 코어 져지 RAPHA CORE JERSEY 런던직배송 -',
      link: 'https://search.shopping.naver.com/gate.nhn?id=21489692427',
      image: 'https://shopping-phinf.pstatic.net/main_2148969/21489692427.20191210154607.jpg',
      lprice: '108000',
      hprice: '115000',
      mallName: '네이버',
      productId: '21489692427',
      productType: '1',
      brand: '라파',
      maker: '라파',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거의류/잡화',
      category4: '상의'
    },
    {
      title: '자전거바지 싸이클젤패드 라이딩복 이너웨어 패드속바지',
      link: 'https://search.shopping.naver.com/gate.nhn?id=81929755200',
      image: 'https://shopping-phinf.pstatic.net/main_8192975/81929755200.jpg',
      lprice: '17800',
      hprice: '0',
      mallName: '메이크앤',
      productId: '81929755200',
      productType: '2',
      brand: '',
      maker: '',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거의류/잡화',
      category4: '하의'
    },
    {
      title: '10 COLOR 오스탈레띠 자전거옷 반팔 져지 -1',
      link: 'https://search.shopping.naver.com/gate.nhn?id=23001124643',
      image: 'https://shopping-phinf.pstatic.net/main_2300112/23001124643.20200530145831.jpg',
      lprice: '15800',
      hprice: '15800',
      mallName: '네이버',
      productId: '23001124643',
      productType: '1',
      brand: '',
      maker: '',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거의류/잡화',
      category4: '상의'
    }
  ];

const ClothesList = (props) => {
    return (
        <div className="list">
            {
                clothesinfo.map((helmet, i) => {
                    return <ClothesCard
                                key={i}
                                image={helmet.image}
                                title={helmet.title}
                                author={helmet.lprice}
                                published={helmet.brand} />
                })
            }

        </div>

    )
}

export default ClothesList;