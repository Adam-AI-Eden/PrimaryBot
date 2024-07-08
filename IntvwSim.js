// interview.js

class InterviewSimulator {
    constructor() {
        this.questions = [
            "What type of government or civil service position are you most interested in pursuing?",
            "Could you briefly describe your level of experience in this area?",
            "What other experiences do you have that you believe would be well-suited to this type of role?",
            "Are you actively looking for a new position, seriously considering a career change, or just casually exploring opportunities?",
            "What interests you about working in the public sector?",
            "Can you briefly describe your relevant work experience?",
            "What's your highest level of education?",
            "Do you have any specific areas of expertise within government or civil service?",
            "Are you familiar with the department or agency you're applying to?",
            "What skills do you think are most important for success in this field?",
            "Are you willing to undergo a background check?",
            "Do you have any security clearances?",
            "Are you able to work in [specific location]?",
            "What's your availability for starting a new position?",
            "Are you a citizen of [country]? (This may be required for some positions)",
            "Do you have experience working with government systems or processes?",
            "How comfortable are you with public speaking or community engagement?",
            "Are you familiar with government procurement processes?",
            "What do you know about public policy development?"
        ];
        this.currentQuestionIndex = 0;
        this.responses = [];
    }

    startInterview() {
        return this.getNextQuestion();
    }

    getNextQuestion() {
        if (this.currentQuestionIndex < this.questions.length) {
            return this.questions[this.currentQuestionIndex++];
        } else {
            return this.endInterview();
        }
    }

    processResponse(response) {
        this.responses.push(response);
        return this.generateFeedback(response);
    }

    generateFeedback(response) {
        // This is a simple feedback generator. In a real system, this would be more sophisticated.
        const feedbacks = [
            "Thank you for sharing that information.",
            "That's very interesting. Let's move on to the next question.",
            "I appreciate your detailed response.",
            "Thank you, that gives us a good understanding of your background.",
            "That's helpful to know. Let's continue with the next question."
        ];
        return feedbacks[Math.floor(Math.random() * feedbacks.length)];
    }

    endInterview() {
        return "Thank you for participating in this interview simulation. We've reached the end of our questions. In a real scenario, we would now review your responses and get back to you with next steps. Is there anything else you'd like to add or ask?";
    }

    getProgress() {
        return `Question ${this.currentQuestionIndex} of ${this.questions.length}`;
    }
}

// Export the class if using modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = InterviewSimulator;
}