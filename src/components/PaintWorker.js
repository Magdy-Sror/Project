import React from 'react'
import LinkOfCrafts from './LinkOfCrafts'
import Star from '../components/Star'
import Work1 from '../images/Work1.png'

function PaintWorker() {
  return (
    <>

    <section className='container'>
        <LinkOfCrafts/>




        <div className='card mb-5'>

<div className='row mt-4 pe-3'>

  <div className='col-lg-4'>
    <Star/>
    <h5> التقييم العام : من 10 زوار للنقاش </h5>

  </div>

  <div className="col-lg-8">
    <img src={Work1} alt="" />
    <h5> الاسم : عمار مصطفي </h5>
  </div>

</div>

<div className='row mt-4 pe-3'>

  <div className='col-lg-6'>
    <h5> الوظيفة : نقاش </h5>
  </div>

  <div className='col-lg-6'>
    <h5> العنوان :   تواصل عبر الهاتف </h5>
  </div>

  <div className='col-lg-6'>
    <h5>رقم الهاتف : 01095797572  </h5>
  </div>

  <div className='col-lg-6'>
    <h5> مواعيد العمل : من 12 ص الي 10 م </h5>
  </div>

</div>

</div>


<div className='card mb-5'>

<div className='row mt-4 pe-3'>

  <div className='col-lg-4'>
    <Star/>
    <h5> التقييم العام : من 10 زوار للنقاش </h5>

  </div>

  <div className="col-lg-8">
    <img src={Work1} alt="" />
    <h5> الاسم :  محمد عسكر </h5>
  </div>

</div>

<div className='row mt-4 pe-3'>

  <div className='col-lg-6'>
    <h5> الوظيفة : نقاش </h5>
  </div>

  <div className='col-lg-6'>
    <h5> العنوان :   تواصل عبر الهاتف </h5>
  </div>

  <div className='col-lg-6'>
    <h5>رقم الهاتف : 01022148476  </h5>
  </div>

  <div className='col-lg-6'>
    <h5> مواعيد العمل : من 12 ص الي 10 م </h5>
  </div>

</div>

</div>


<div className='card mb-5'>

<div className='row mt-4 pe-3'>

  <div className='col-lg-4'>
<Star/>
    <h5> التقييم العام : من 10 زوار للنقاش </h5>

  </div>

  <div className="col-lg-8">
    <img src={Work1} alt="" />
    <h5> الاسم : المغربي  </h5>
  </div>

</div>

<div className='row mt-4 pe-3'>

  <div className='col-lg-6'>
    <h5> الوظيفة : نقاش </h5>
  </div>

  <div className='col-lg-6'>
    <h5> العنوان :  وسط البلد/ بجوار اسامة الجزار </h5>
  </div>

  <div className='col-lg-6'>
    <h5>رقم الهاتف : لا يوجد  </h5>
  </div>

  <div className='col-lg-6'>
    <h5> مواعيد العمل : من 12 ص الي 10 م </h5>
  </div>

</div>

</div>






    </section>
    

    
    
    
    </>
  )
}

export default PaintWorker