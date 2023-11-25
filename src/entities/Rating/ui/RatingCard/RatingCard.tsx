import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';
import { StarRating } from '@/shared/ui/StarRating';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input';
import { VStack, HStack } from '@/shared/ui/Stack';

import { Button } from '@/shared/ui/Button';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo(
    ({
        className,
        title,
        feedbackTitle,
        hasFeedback,
        onCancel,
        onAccept,
        rate = 0,
    }: RatingCardProps) => {
        const { t } = useTranslation();
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [starsCount, setStarsCount] = useState(rate);
        const [feedback, setFeedback] = useState('');

        const handleSelectStars = useCallback(
            (selectedStarsCount: number) => {
                setStarsCount(selectedStarsCount);
                if (hasFeedback) {
                    setIsModalOpen(true);
                } else {
                    onAccept?.(selectedStarsCount);
                }
            },
            [hasFeedback, onAccept],
        );

        const handleAccept = useCallback(() => {
            setIsModalOpen(false);
            onAccept?.(starsCount, feedback);
        }, [feedback, onAccept, starsCount]);

        const handleCancel = useCallback(() => {
            setIsModalOpen(false);
            onAccept?.(starsCount);
        }, [onAccept, starsCount]);

        const handleCloseModal = useCallback(() => {
            setIsModalOpen(false);
            onCancel?.(starsCount);
        }, [onCancel, starsCount]);

        return (
            <Card className={className} data-testid='RatingCard'>
                <VStack gap='16'>
                    <Text title={starsCount ? t('Ваша оценка') : title} />
                    <StarRating
                        size={40}
                        selectedStars={starsCount}
                        onSelect={handleSelectStars}
                    />
                </VStack>
                <Modal isOpen={isModalOpen} lazy onClose={handleCloseModal}>
                    <VStack max gap='32'>
                        <Text title={feedbackTitle} />
                        <Input
                            placeholder={t('Ваш отзыв')}
                            value={feedback}
                            onChange={setFeedback}
                            data-testid='RatingCard.Input'
                        />
                        <HStack gap='8' max justify='end'>
                            <Button
                                theme='blue'
                                onClick={handleCancel}
                                data-testid='RatingCard.Close'
                            >
                                {t('Закрыть')}
                            </Button>
                            <Button
                                theme='primary'
                                onClick={handleAccept}
                                data-testid='RatingCard.Send'
                            >
                                {t('Отправить')}
                            </Button>
                        </HStack>
                    </VStack>
                </Modal>
            </Card>
        );
    },
);
