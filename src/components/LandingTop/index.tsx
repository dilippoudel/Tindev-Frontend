import welcome from '../../media/landing-img-1.svg'

const LandingTop = () => (
	<div className='landing-top-bg px-3'>
		<div className='card mx-auto bg-transparent border-0'>
			<div className='row m-auto'>
				<div className='col-md-8 align-items-center d-flex justify-content-center'>
					<div className='card-body mt-5'>
						<h2 className=''>Heading</h2>
						<h4 className='card-title'>Heading Text will be here</h4>
						<p className='card-text'>
							Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
							scelerisque ante sollicitudin commodo. Cras purus odio,
							vestibulum.
						</p>
						<p className='card-text'>
							<small className='font-weight-light'>
								Application for both developers and employers
							</small>
						</p>
					</div>
				</div>

				<div className='col-md-4 mx-auto hide-md'>
					<img src={welcome} alt='landing-img' className='img-fluid' />
				</div>
			</div>
		</div>
	</div>
)

export default LandingTop
