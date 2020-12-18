type text = { inputText: string }

const HalfCircle = ({ inputText }: text) => (
	<div className='d-flex justify-content-center'>
		<h5 className='half-circle d-flex justify-content-center align-items-center pb-4'>
			{inputText}
		</h5>
	</div>
)

export default HalfCircle
