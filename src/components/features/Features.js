import React from 'react'
import FeatureCard from './featureCard/FeatureCard'
import './Features.scss'

const Features = () => {
    return (
        <div className="features">
            <FeatureCard 
            heading={'All Over World'} 
            content={`We have partnership with various event management companies all over the world,so any place any where we
            can conduct any event's`}
                icon={'icon-global'}
                />
                <FeatureCard 
            heading={'24/7 CustomerCare Service'} 
            content={`
            we have excellent service for our customer ,any time customer can call and clear their doubts without any delay
            `}
            icon={'icon-bubbles4'}
                />
                <FeatureCard 
            heading={'Time Management'} 
            icon={'icon-hour-glass'}
            content={`
            WithOut any delay all the events are conducted perfectly with customers satisfaction. we perfectly follow the customers
            schedules
            `}
                />
                <FeatureCard 
            heading={'Experiance Speaks'} 
            content={`
            As we use highly professioned and experianced workers ,we have perfectly finish the works with full happiness and joyness
                `}
                icon={'icon-trophy'}
                />
                <FeatureCard 
            heading={'Keep Up to date'} 
            content={`
            We received so many awards for our excellent works, we never tired and keep trying new things to make events modern and creative looks 
            
            `}
                icon={'icon-calendar'}
                />
                <FeatureCard 
            heading={'Always Maintain Quality'} 
            content={`
            Our Events are always maintain certain qualities we have seperate team for keep checking quality and improve events move realistic and funfull
            `}
                icon={'icon-fire'}
                />
                
        </div>
    )
}

export default Features
