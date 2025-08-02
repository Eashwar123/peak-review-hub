import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Star } from "lucide-react";

interface UserLevelProps {
  reviewCount: number;
}

export const UserLevel = ({ reviewCount }: UserLevelProps) => {
  const getLevelInfo = (points: number) => {
    if (points >= 10) {
      return { level: 3, pointsNeeded: 0, nextLevelAt: null, progress: 100 };
    } else if (points >= 5) {
      return { 
        level: 2, 
        pointsNeeded: 10 - points, 
        nextLevelAt: 10,
        progress: ((points - 5) / 5) * 100 
      };
    } else {
      return { 
        level: 1, 
        pointsNeeded: 5 - points, 
        nextLevelAt: 5,
        progress: (points / 5) * 100 
      };
    }
  };

  const { level, pointsNeeded, nextLevelAt, progress } = getLevelInfo(reviewCount);

  const getLevelBadgeVariant = (level: number) => {
    switch (level) {
      case 3: return "default";
      case 2: return "secondary";
      default: return "outline";
    }
  };

  const getLevelIcon = (level: number) => {
    return level === 3 ? <Trophy className="w-4 h-4" /> : <Star className="w-4 h-4" />;
  };

  return (
    <Card className="p-4 bg-gradient-card border-border">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {getLevelIcon(level)}
          <h3 className="font-semibold">Your Level</h3>
        </div>
        <Badge variant={getLevelBadgeVariant(level)} className="px-3 py-1">
          Level {level}
        </Badge>
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Reviews Submitted</span>
          <span className="font-medium">{reviewCount}</span>
        </div>
        
        {nextLevelAt && (
          <>
            <Progress value={progress} className="h-2" />
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">
                {pointsNeeded} more review{pointsNeeded !== 1 ? 's' : ''} to Level {level + 1}
              </span>
              <span className="text-muted-foreground">{nextLevelAt} total</span>
            </div>
          </>
        )}
        
        {level === 3 && (
          <div className="text-center text-sm text-primary font-medium">
            🎉 Max level reached! Keep reviewing!
          </div>
        )}
      </div>
    </Card>
  );
};