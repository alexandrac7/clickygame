import React, { Component } from 'react';
import './App.css';
import cards from './cards.json'
// import Navpills from './components/Navpills'
import Title from './components/Title'
import TarotCard from './components/TarotCard'
import Wrapper from './components/Wrapper'


class App extends Component {
    state = {
        message: "Click an image to begin!",
        topScore: 0,
        currentScore: 0,
        cards: cards,
        unchosenCards: cards
    }

    componentDidMount() {
    }

    shuffle = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    selectCard = name => {
        const findCard = this.state.unchosenCards.find(item => item.name === name);

        if(findCard === undefined) {
            // If the same card is chosen twice
            this.setState({ 
                message: "The cards are troubled and uncertain!",
                topScore: (this.state.currentScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
                currentScore: 0,
                cards: cards,
                unchosenCards: cards
            });
        }
        else {
            // New card guessed correctly
            const newCards = this.state.unselectedCards.filter(item => item.name !== name);
            
            this.setState({ 
                message: "Correct! The future looks fortuitous!",
                currentScore: this.state.currentScore + 1,
                cards: cards,
                unselectedCards: newCards
            });
        }

        this.shuffle(cards);
    };

    render() {
        return (
            <Wrapper>
                {/* <Navpills
                    message={this.state.message}
                    curScore={this.state.currentScore}
                    topScore={this.state.topScore}
                /> */}
                <Title />
                {
                    this.state.cards.map(card => (
                        <TarotCard
                            name={card.name}
                            image={card.image} 
                            currentScore={this.state.currentScore}
                        />
                    ))
                }
            </Wrapper>
        );
    }
}

export default App;
