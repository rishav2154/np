import React from 'react';
import { Award, Users, Globe, TrendingUp, Target, Heart, Shield } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: 'Trust & Reliability',
      description: 'Building lasting relationships through transparent and dependable service.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to delivering superior quality in every aspect of our operations.'
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your success is our priority, and we go above and beyond to ensure satisfaction.'
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Awarded "Best Import-Export Company" for three consecutive years'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Over 50 experienced professionals across multiple countries'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Operations spanning across 6 continents and 50+ countries'
    },
    {
      icon: TrendingUp,
      title: 'Growth Focus',
      description: '300% business growth over the past 5 years'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Neosankalp
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Founded with a vision to bridge global markets, Neosankalp Co. has evolved into a trusted name 
            in international trade, connecting businesses worldwide with premium products and services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-fade-in">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Story
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
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
                className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <achievement.icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our Core Values
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The principles that guide every decision we make and every relationship we build.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="text-center p-8 bg-gradient-to-br from-blue-50 to-amber-50 dark:from-gray-700 dark:to-gray-600 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {value.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;