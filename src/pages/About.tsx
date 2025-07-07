import React from 'react';
import { Award, Users, Globe, TrendingUp, Target, Heart, Shield, CheckCircle } from 'lucide-react';
import { usePopup } from '../contexts/PopupContext';

const About: React.FC = () => {
  const { showPopup } = usePopup();

  const values = [
    {
      icon: Shield,
      title: 'Trust & Reliability',
      description: 'Building lasting relationships through transparent and dependable service.',
      details: 'We maintain the highest standards of integrity in all our business dealings, ensuring our clients can rely on us for consistent, quality service.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to delivering superior quality in every aspect of our operations.',
      details: 'Our pursuit of excellence drives us to continuously improve our processes and exceed client expectations in every project.'
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your success is our priority, and we go above and beyond to ensure satisfaction.',
      details: 'We believe in putting our customers at the center of everything we do, tailoring our services to meet their unique needs and goals.'
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Awarded "Best Import-Export Company" for three consecutive years',
      details: 'Our commitment to excellence has been recognized by industry leaders and trade associations worldwide.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Over 50 experienced professionals across multiple countries',
      details: 'Our diverse team brings decades of combined experience in international trade, logistics, and business development.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Operations spanning across 6 continents and 50+ countries',
      details: 'Our extensive network enables us to provide seamless service across major trade routes and emerging markets.'
    },
    {
      icon: TrendingUp,
      title: 'Growth Focus',
      description: '300% business growth over the past 5 years',
      details: 'Our strategic approach and client-focused service have resulted in consistent growth and expansion into new markets.'
    }
  ];

  const milestones = [
    { year: '2008', event: 'Company Founded', description: 'Started as a small trading company with big dreams' },
    { year: '2012', event: 'International Expansion', description: 'Opened offices in London and Singapore' },
    { year: '2016', event: 'Digital Transformation', description: 'Launched advanced tracking and logistics platform' },
    { year: '2020', event: 'Sustainability Initiative', description: 'Committed to carbon-neutral shipping solutions' },
    { year: '2023', event: 'AI Integration', description: 'Implemented AI-powered supply chain optimization' }
  ];

  const handleValueClick = (value: typeof values[0]) => {
    showPopup(
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
          <value.icon className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{value.title}</h3>
        <p className="text-slate-600 dark:text-slate-300">{value.details}</p>
      </div>,
      'info'
    );
  };

  const handleAchievementClick = (achievement: typeof achievements[0]) => {
    showPopup(
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
          <achievement.icon className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{achievement.title}</h3>
        <p className="text-slate-600 dark:text-slate-300">{achievement.details}</p>
      </div>,
      'success'
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              About Neosankalp
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Founded with a vision to bridge global markets, Neosankalp Co. has evolved into a trusted name 
              in international trade, connecting businesses worldwide with premium products and services.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                <p>
                  Since our establishment in 2008, Neosankalp Co. has been at the forefront of international 
                  trade, facilitating seamless import and export operations for businesses of all sizes. 
                  What started as a small trading company has grown into a comprehensive global trade solution provider.
                </p>
                <p>
                  Our journey began with a simple mission: to make international trade accessible, efficient, 
                  and profitable for our clients. Today, we pride ourselves on having built strong partnerships 
                  across continents and maintained long-lasting relationships with our clients.
                </p>
                <p>
                  With our deep understanding of global markets, regulatory compliance, and logistics networks, 
                  we continue to help businesses expand their horizons and achieve their international trade goals.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 animate-fade-in delay-200">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.title}
                  onClick={() => handleAchievementClick(achievement)}
                  className="p-6 bg-gradient-to-br from-blue-50 to-white dark:from-slate-700 dark:to-slate-600 rounded-2xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer border border-blue-100 dark:border-blue-800"
                >
                  <achievement.icon className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-4" />
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              The principles that guide every decision we make and every relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                onClick={() => handleValueClick(value)}
                className="text-center p-10 bg-white dark:bg-slate-800 rounded-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in border border-blue-100 dark:border-blue-800"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <value.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Key milestones that have shaped our growth and success over the years.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="flex items-center mb-12 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {milestone.year}
                  </span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mr-8 relative">
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-blue-200 dark:bg-blue-800"></div>
                </div>
                <div className="flex-1 p-6 bg-blue-50 dark:bg-slate-700 rounded-xl">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {milestone.event}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;