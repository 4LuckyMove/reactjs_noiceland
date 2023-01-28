import { FC } from 'react'
import NoicelandCard from './NoicelandCard'
import { IPost } from '../../../interface/interfaces'
import { Link } from 'react-router-dom'
import { scrollTop } from '../../../utils/scrollTop'

interface NoicelandCardsProps {
	data: IPost[]
	maxCountCard?: number
	height?: string
	heightCard?: string
}

const NoicelandCards: FC<NoicelandCardsProps> = ({
	data,
	maxCountCard,
	height,
	heightCard,
}) => {

	return (
		<>
			{data.map((item, index) =>
				maxCountCard ? (
					index < maxCountCard && (
						<Link key={item.id} to={`blogs/${item.id}`} onClick={scrollTop}>
							<NoicelandCard
								item={item}
								height={height}
								heightCard={heightCard}
							/>
						</Link>
					)
				) : (
					<Link key={item.id} to={`blogs/${item.id}`} onClick={scrollTop}>
						<NoicelandCard
							item={item}
							height={height}
							heightCard={heightCard}
						/>
					</Link>
				)
			)}
		</>
	)
}

export default NoicelandCards
