import Gallery from '../components/Gallery'
/**
 * @type {import("../types/section").Section}
 */
const Section = {
  meta: {
    title: 'MarketPulse',
    banner: '/pics/ext/marketpulse/marketpulse_banner.png',
    complete: true,
    tags: 'TypeScript,React.js,Python,PostgreSQL,SQLAlchemy,TailwindCSS,Supabase,Flask,PyTorch,TensorFlow,LangChain,DeepSeek,Docker,GitHub,Nginx',
    objectives: `Led a small cross-functional team: assigned stories, ran stand-up meetings, conducted code reviews, and maintained high quality through linting, testing, and CI/CD pipelines.
|Built a full-stack, React SPA using Vite, TypeScript, TailwindCSS, and ShadCN UI components that consumes a Flask REST API for real-time market data and ML predictions.
|Implemented global state management and caching via React-Query to provide real-time dashboards, stock selection, views, and site-wide optimistic updates.
|Developed reusable chart components powered with ShadCN to visualize sentiment scores, forecast accuracy, and buy/sell signals for each ticker.
|Collaborated to document key architecture, data flow, security decisions, and software requirement specification(s), preparing project for future teams and future iterations.
|Added an LLM service with LangChain, llama-cpp, and self-hosted DeepSeek, that summarizes market insights on-demand into concise "buy or sell" notes for the users.
|Created automated data ingestion jobs in Flask to pull stock prices (Yahoo Finance), social media (Reddit), and news sources (DuckDuckGo search); stored results in PostgreSQL database via SQLAlchemy.
|Added RoBERTa-based sentiment analysis of social media and news feeds to refine price forecasts and buy/sell recommendations.
|Wrote comprehensive unit, integration, and end-to-end tests, (Jest/pytest, Cypress) with >80% coverage, run through GitHub Actions on every PR.
|Set up secure authentication using Supabase JWTs and Google OAuth, to communicate/authenticate with Flask backend and Supabase instance.
|Added RoBERTa-based sentiment analysis of social media and news feeds to refine price forecasts and buy/sell recommendations.
|Configured Docker Compose stack for dev and prod environments, building separate client/server images and proxying API requests with Nginx.
`,
    description: `MarketPulse is a data-driven AI investment assistant that turns raw market feeds 
into actionable insights. Built with TypeScript, React (Vite), [Supabase](https://supabase.com), 
[Flask](https://flask.palletsprojects.com/en/stable/tutorial/), [PyTorch](https://pytorch.org/), and 
[TensorFlow](https://en.wikipedia.org/wiki/TensorFlow), the platform aggregates stock prices, 
Reddit/news [sentiment](https://huggingface.co/mrm8488/distilroberta-finetuned-financial-news-sentiment-analysis), 
and [DeepSeek](https://huggingface.co/lmstudio-community/DeepSeek-R1-Distill-Qwen-1.5B-GGUF) LLM summaries to provide real-time price forecasts, 
buy/sell recommendations, and visual analytics via a Tailwind/ShadCN interface. 
The architecture is microservice-based: a React SPA consumes a Flask API gateway that delivers ML outputs, 
all authenticated through Supabase [JWTs](https://supabase.com/docs/guides/auth/jwts)-offering a seamless 
experience for both novice and seasoned traders.`,
    timeline: [
      [
        'Mid-January, 2025',
        'Started project: planned sprints, assigned roles, high-level architecture, set up repo and CI/CD.'
      ],
      ['Mid-February 2025', 'Completed sprint 1: MVP with core features.'],
      [
        'Mid-March 2025',
        'Completed sprint 2: Data pipeline, LLM, sentiment analysis, forecasting.'
      ],
      [
        'Early-April 2025',
        'Completed final sprint: Testing, documentation, polish, bugs'
      ]
    ]
  },
  components: { Links, Description, Contributions, Pictures }
}

export default Section

function Description() {
  return <div>...</div>
}

function Contributions() {
  return <div>...</div>
}

function Pictures() {
  const root = 'pics/ext/marketpulse/screenshots'
  return (
    <Gallery
      images={[
        {
          label: 'Project poster',
          imgPath: `/pics/ext/marketpulse/poster.png`
        },
        {
          label: 'Home page',
          imgPath: `${root}/dashboard1.png`
        },
        {
          label: 'Transaction history',
          imgPath: `${root}/edit.png`
        },
        {
          label: 'Stock page',
          imgPath: `${root}/stock.png`
        },
        {
          label: 'Predictions',
          imgPath: `${root}/stock_forecast.png`
        },
        {
          label: 'Historical predictions (advanced view)',
          imgPath: `${root}/stock_historical_predictions_advanced.png`
        },
        {
          label: 'Current sentiment (social media and news)',
          imgPath: `${root}/stock_sentiment.png`
        },
        {
          label: 'Historical social media sentiment (advanced view)',
          imgPath: `${root}/stock_historical_social.png`
        },
        {
          label: 'Transaction history and performance',
          imgPath: `${root}/stock_transaction_history.png`
        },
        {
          label: 'MarketPulse AI summary (LLM-generated)',
          imgPath: `${root}/stock_mp_ai.png`
        },
        {
          label: 'Login',
          imgPath: `${root}/login1.png`
        },
        {
          label: 'Settings (1/3)',
          imgPath: `${root}/settings1.png`
        },
        {
          label: 'Settings (2/3)',
          imgPath: `${root}/settings2.png`
        },
        {
          label: 'Settings (3/3)',
          imgPath: `${root}/settings3.png`
        }
      ]}
    />
  )
}

function Links() {
  return <div>...</div>
}
