import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Card, Avatar, IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { cardStyles } from '../styles/cardStyles';
import { colors, spacing } from '../styles/globalStyles';
import { NewsArticle } from '../types';

interface NewsCardProps {
  article: NewsArticle;
  onPress?: () => void;
  onBookmark?: () => void;
  onShare?: () => void;
  onLike?: () => void;
  variant?: 'vertical' | 'horizontal';
}

const NewsCard: React.FC<NewsCardProps> = ({
  article,
  onPress,
  onBookmark,
  onShare,
  onLike,
  variant = 'vertical',
}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    onBookmark?.();
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
    onLike?.();
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  };

  if (variant === 'horizontal') {
    return (
      <TouchableOpacity onPress={onPress}>
        <Card style={[cardStyles.container, cardStyles.horizontalCard]}>
          <Image
            source={{ uri: article.imageUrl }}
            style={cardStyles.horizontalImage}
            resizeMode="cover"
          />
          <View style={cardStyles.horizontalContent}>
            <View>
              <Text style={cardStyles.horizontalTitle} numberOfLines={2}>
                {article.title}
              </Text>
              <Text style={cardStyles.horizontalDescription} numberOfLines={2}>
                {article.description}
              </Text>
            </View>
            <View style={cardStyles.metaContainer}>
              <Text style={cardStyles.authorName}>{article.author}</Text>
              <Text style={cardStyles.readTime}>{article.readTime} min</Text>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <Card style={cardStyles.container}>
        {/* Image with Overlay */}
        <View style={cardStyles.imageContainer}>
          <Image
            source={{ uri: article.imageUrl }}
            style={cardStyles.image}
            resizeMode="cover"
          />
          <View style={cardStyles.imageOverlay} />

          {/* Category Badge */}
          <View style={cardStyles.categoryBadge}>
            <Text style={cardStyles.categoryText}>{article.category}</Text>
          </View>

          {/* Bookmark Icon */}
          <TouchableOpacity
            style={cardStyles.bookmarkIcon}
            onPress={handleBookmark}
          >
            <Icon
              name={isBookmarked ? 'bookmark' : 'bookmark-border'}
              size={20}
              color={isBookmarked ? colors.primary : colors.darkGray}
            />
          </TouchableOpacity>
        </View>

        {/* Content */}
        <View style={cardStyles.contentContainer}>
          <Text style={cardStyles.title} numberOfLines={2}>
            {article.title}
          </Text>

          <Text style={cardStyles.description} numberOfLines={3}>
            {article.description}
          </Text>

          {/* Author & Meta Info */}
          <View style={cardStyles.metaContainer}>
            <View style={cardStyles.authorContainer}>
              <Avatar.Text
                size={32}
                label={article.author.charAt(0)}
                style={cardStyles.authorAvatar}
              />
              <View style={cardStyles.authorInfo}>
                <Text style={cardStyles.authorName}>{article.author}</Text>
                <Text style={cardStyles.publishDate}>
                  {formatDate(article.publishedAt)}
                </Text>
              </View>
            </View>
            <Text style={cardStyles.readTime}>{article.readTime} min read</Text>
          </View>

          {/* Action Buttons */}
          <View style={cardStyles.actionContainer}>
            <TouchableOpacity
              style={cardStyles.actionButton}
              onPress={handleLike}
            >
              <Icon
                name={isLiked ? 'favorite' : 'favorite-border'}
                size={18}
                color={isLiked ? colors.error : colors.darkGray}
              />
              <Text style={cardStyles.actionText}>{likeCount}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={cardStyles.actionButton}
              onPress={onShare}
            >
              <Icon name="share" size={18} color={colors.darkGray} />
              <Text style={cardStyles.actionText}>Share</Text>
            </TouchableOpacity>

            <TouchableOpacity style={cardStyles.actionButton}>
              <Icon name="comment" size={18} color={colors.darkGray} />
              <Text style={cardStyles.actionText}>Comment</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default NewsCard;